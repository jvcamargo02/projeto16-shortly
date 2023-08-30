import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        res.locals.userId = id;

        next();
    } catch (e) {
        console.log(e);

        return res
            .status(401)
            .send("O token expirou ou é inválido. Por favor faça login novamente.");
    }
}
