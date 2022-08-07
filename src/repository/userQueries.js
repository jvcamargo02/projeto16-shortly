import { clientDb } from "../database/client.js";

function findUsersByEmail(email) {
    return clientDb.query("SELECT * FROM users WHERE email = $1", [email]);
}

function insertUser ({name, email, password}){
    return clientDb.query("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)", [name, email, password])
}

function usersData (userId) {
    return clientDb.query(`SELECT  u.id, u.name, SUM("visitCount"), json_agg(urls) as "shortenedUrls" FROM users u JOIN urls ON u.id = urls."userId" WHERE u.id = $1 GROUP BY (u.id)`, [userId])
}

export { findUsersByEmail, insertUser, usersData };