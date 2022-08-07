import { findUsersByEmail } from "../../repository/userQueries.js";
import { signUpSchema } from "../../schemas/authSchema.js";

function validateSignUp(req, res, next) {
    const { error } = signUpSchema.validate(req.body);

    if (error) {
        return res.status(422).send(error.details[0]?.message);
    }

    res.locals.userData = req.body;

    next();
}

function confirmPassword(req, res, next) {
    const { userData } = res.locals;

    if (userData.password !== userData.confirmPassword) {
        return res.status(422).send("Passwords don't match");
    }

    delete userData.confirmPassword;

    next();
}

async function findEmailInDb(req, res, next) {
    const { userData } = res.locals;

    try {
        const { rowCount } = await findUsersByEmail(userData.email);

        if (rowCount !== 0) {
            return res
                .status(409)
                .send("This email address is already being used");
        }

        next();
    } catch (e) {
        console.log(e);

        return res
            .status(500)
            .send("An error occurred. Please try again later.");
    }
}

export { validateSignUp, confirmPassword, findEmailInDb };
