import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { insertUser } from "../repository/userQueries.js";

dotenv.config();

async function signUpController(req, res) {
    const { userData } = res.locals;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    try { 
        await insertUser({
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
        });

        return res.sendStatus(201);
    } catch (e) {
        console.log(e);

        return res.status(500).send("Error inserting into database");
    }
}

function signInController(req, res) {
    const { password } = res.locals.userData;
    const { password: dbPassword, name, id } = res.locals.dbData;

    if (!bcrypt.compareSync(password, dbPassword)) {
        return res.status(401).send("E-mail ou senha inválidos.");
    }

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    return res.status(200).send(token);
}

function socialLoginController(req, res) {
    const { id } = res.locals.dbData;

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    return res.status(200).send(token);
}

export { signUpController, signInController, socialLoginController };
