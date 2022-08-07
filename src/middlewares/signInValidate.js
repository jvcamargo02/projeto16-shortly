import { findUsersByEmail } from "../repository/userQueries.js";
import { signInSchema } from "../schemas/authSchema.js";

function validateSignIn(req, res, next) {
    const { error } = signInSchema.validate(req.body);

    if (error) {
        return res.status(422).send(error.details[0]?.message);
    }

    res.locals.userData = req.body;

    next();
}

async function findUser(req, res, next) {
    const { email } = res.locals.userData;

    try {
        const { rows: user, rowCount } = await findUsersByEmail(email);

        if (rowCount !== 1) {
            return res
                .status(409)
                .send(
                    "This email address unregistered. Try registering again or contact the administrator"
                );
        }

        res.locals.dbData = user[0];

        next();
    } catch (e) {
        console.log(e);

        return res
            .status(500)
            .send("An error occurred. Please try again later.");
    }
}

export { validateSignIn, findUser };
