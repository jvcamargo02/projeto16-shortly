import { clientDb } from "../database/client.js";

function insertUrl(userId, shortUrl, url) {
    return clientDb.query(
        `INSERT INTO urls("userId", "shortUrl", url) VALUES ($1, $2, $3)`,
        [userId, shortUrl, url]
    );
}

function searchUrlById(id) {
    return clientDb.query(`SELECT * FROM urls WHERE id = $1`, [id]);
}

function searchCodeByShortUrl(shortUrl) {
    return clientDb.query(`SELECT * FROM urls WHERE "shortUrl" = $1`, [
        shortUrl,
    ]);
}

function searchUrlByShortUrl(shortUrl) {
    return clientDb.query(
        `UPDATE urls
            SET "visitCount"= "visitCount" + 1 
            WHERE "shortUrl"= $1
            RETURNING url`,
        [shortUrl]
    );
}

function deleteUrlQuery(id, userId) {
    console.log(id, userId)
     return clientDb.query(
        `DELETE FROM urls
                WHERE id = $1 
                AND "userId" = $2
                RETURNING true`,
        [id, userId]
    ); 
}

export { insertUrl, searchUrlById, searchUrlByShortUrl, deleteUrlQuery , searchCodeByShortUrl};