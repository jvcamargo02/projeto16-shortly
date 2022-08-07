import bcrypt from "bcrypt";
import { insertUser } from "../repository/userQueries.js";

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

export { signUpController };
