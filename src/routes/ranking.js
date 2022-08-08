import { Router } from "express";
import { getRanking } from "../controllers/rankingController.js"

const ranking = Router();

ranking.get("/ranking", getRanking);

export default ranking;