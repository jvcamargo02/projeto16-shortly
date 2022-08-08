import { clientDb } from "../database/client.js";

function returnRanking (){
    return clientDb.query(`SELECT u.id, u.name, COUNT(v."shortUrl") AS "linkCount", SUM(v."visitCount") AS "visitCount" FROM users u JOIN urls v ON u.id = v."userId" GROUP BY u.id ORDER BY "visitCount" DESC LIMIT 10 `)
}

export { returnRanking }