import { clientDb } from "../database/client.js";

function countUsersByEmail(email) {
    return clientDb.query("SELECT * FROM users WHERE email = $1", [email]);
}

function insertUser ({name, email, password}){
    return clientDb.query("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)", [name, email, password])
}

export { countUsersByEmail, insertUser };