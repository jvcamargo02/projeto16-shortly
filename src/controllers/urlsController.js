import { nanoid } from "nanoid";
import {
    deleteUrlQuery,
    insertUrl,
    searchUrlById,
    searchUrlByShortUrl,
    searchCodeByShortUrl
} from "../repository/urlsQueries.js";
import { clientDb } from "../database/client.js";

async function postShortenUrl(req, res) {
    const { url, code } = res.locals;
    const { userId } = res.locals;

    try {
        const { rows: urlData } = await searchCodeByShortUrl(code);

        if (urlData?.length !== 0) {
            return res.status(409).send("Este código já está em uso");
        }
        const shortUrl = code;
    
        await insertUrl(userId, shortUrl, url);

        return res.status(201).send({
            shortUrl,
        });
    } catch (e) {
        console.log(e);

        return res
            .status(500)
            .send("Error generating your redirect link, please try again.");
    }
}

async function getUrlById(req, res) {
    const { id } = req.params;

    try {
        const { rows: urlData } = await searchUrlById(id);

        if (urlData?.length === 0) {
            return res
                .status(404)
                .send("Este código não existe no nosso banco de dados");
        }

        const { id: urlId, shortUrl, url } = urlData[0];

        return res.status(200).send({
            id: urlId,
            shortUrl,
            url,
        });
    } catch (e) {
        console.log(e);

        return res.status(500).send("Error querying database.");
    }
}

async function editUrl(req, res) {
    
    const { id } = req.params;
    const { code, url } = req.body;



    try {
        const { rowCount } = await updateUrlById(id, code, url);

        if (rowCount === 0) {
            return res
                .status(404)
                .send("Este código não existe no nosso banco de dados");
        }

        return res.status(200).send("URL atualizada com sucesso!");
    } catch (e) {
        console.log(e);

        return res.status(500).send("Error querying database.");
    }
}

async function updateUrlById(id, shortUrl, url) {

    const query = `
        UPDATE urls
        SET "shortUrl" = $1, "url" = $2
        WHERE "id" = $3
    `;

    
    const values = [shortUrl, url, id];

    try {
        const { rowCount } = await clientDb.query(query, values);
        return { rowCount };
    } catch (e) {
        console.log(e);
        throw e;
    }
}

async function getShortUrlRedirect(req, res) {
    const { shortUrl } = req.params;

    try {
        const { rows: urlInfo } = await searchUrlByShortUrl(shortUrl);

        if (urlInfo?.length === 0) {
            return res
                .status(404)
                .send("Esta url não existe no nosso banco de dados.");
        }

        const { url } = urlInfo[0];

        res.redirect(302, url);
    } catch (e) {
        console.log(e);

        return res.status(500).send("Error querying database.");
    }
}

async function deleteUrl(req, res) {
    const { id } = req.params;
    const { userId } = res.locals
    
    try {
        const { rows: url } = await searchUrlById(id)

        if(url.length !== 1) {
            return res.status(404).send("Url não encontrada.")
        }

        const { rowCount, rows } = await deleteUrlQuery(id, userId)

        return res.status(204).send("Url apagada.")

    } catch (e) {
        console.log(e)

        return res.status(500).send("Error deleting your url. Try again later.");
    }
}

export { postShortenUrl, getUrlById, getShortUrlRedirect, deleteUrl, editUrl };
