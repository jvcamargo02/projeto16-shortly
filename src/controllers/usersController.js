import { usersData } from "../repository/userQueries.js";

async function getUserData(req, res) {
    const { userId } = res.locals;
    try {
        const {rows: userData} = await usersData(userId);

        const sendData = removeUserId(userData)

         return res.status(200).send(sendData)
    } catch (e) {
        console.log(e);

        return res.status(500).send("Error querying database.");
    }
}

function removeUserId (userData) {
    const shortenedUrls = userData[0].shortenedUrls

    shortenedUrls.map(url => {
        delete url.userId
    })

    return (userData)
}

export { getUserData };
