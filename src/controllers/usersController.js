import { usersData } from "../repository/userQueries.js";

async function getUserData(req, res) {
    const { userId } = res.locals;
    try {
        const { rows: userData } = await usersData(userId);

        if (userData.length !== 1) {
            return res
                .status(404)
                .send(
                    "We couldn't find your data in our database. Please confirm re-login and confirm your credentials"
                );
        }

        const sendData = removeUserId(userData);

        return res.status(200).send(sendData[0] || sendData);
    } catch (e) {
        console.log(e);

        return res.status(500).send("Error querying database.");
    }
}

function removeUserId(userData) {
    const shortenedUrls = userData[0]?.shortenedUrls;

    shortenedUrls.map((url) => {
        delete url.userId;
        delete url.createdAt;
    });

    return userData;
}

export { getUserData };
