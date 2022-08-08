import { returnRanking } from "../repository/rankingQueries.js";

async function getRanking (req, res) {

    try{
        const { rows: ranking } = await returnRanking()

        return res.status(200).send(ranking)
    } catch (e) {
        console.log(e)

        return res.status(500).send("Error querying database.")
    }
}

export { getRanking }