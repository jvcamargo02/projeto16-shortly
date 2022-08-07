import { Router } from "express";

const urls = Router();

urls.post("/urls/shorten", (req, res) => res.send("Hello world"));
urls.get("/urls/:id", (req, res) => res.send("Hello world"));
urls.get("/urls/open/:shortUrl", (req, res) => res.send("Hello world"));
urls.delete("/urls/:id", (req, res) => res.send("Hello world"));

export default urls;