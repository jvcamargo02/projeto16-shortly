import { Router } from "express";

const ranking = Router();

ranking.get("/ranking", (req, res) => res.send("Hello world ranking"));

export default ranking;