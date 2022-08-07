import { Router } from "express";
import { deleteUrl, getShortUrlRedirect, getUrlById, postShortenUrl } from "../controllers/urlsController.js";
import { validateToken } from "../middlewares/tokenValidate.js";
import { validateUrl } from "../middlewares/urlsMiddlewares/urlValidate.js";

const urls = Router();

urls.post("/urls/shorten", validateUrl, validateToken, postShortenUrl);
urls.get("/urls/:id", getUrlById);
urls.get("/urls/open/:shortUrl", getShortUrlRedirect );
urls.delete("/urls/:id", validateToken, deleteUrl);

export default urls;
