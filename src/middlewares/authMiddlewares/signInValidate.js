import { findUsersByEmail } from "../../repository/userQueries.js";
import { signInSchema, socialLoginSchema } from "../../schemas/authSchema.js";
import bcrypt from "bcrypt";
import { insertUser } from "../../repository/userQueries.js";

function validateSignIn(req, res, next) {
    const { error } = signInSchema.validate(req.body);

    if (error) {
        return res.status(422).send(error.details[0]?.message);
    }

    res.locals.userData = req.body;

    next();
}

function validateSocialLogin(req, res, next) {
    const { error } = socialLoginSchema.validate(req.body);

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

async function findSocialUser(req, res, next) {
    const { email, name } = res.locals.userData;

    try {
        const { rows: user, rowCount } = await findUsersByEmail(email);
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash("12345678", salt);

        if (rowCount !== 1) {
                await insertUser({
                    name: name,
                    email: email,
                    password: hashedPassword,
                });

                const { rows: newUser, rowCount } = await findUsersByEmail(email);
                res.locals.dbData = newUser[0];
                next()
        
            
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

export { validateSignIn, findUser, validateSocialLogin,findSocialUser };
