import { Router } from "express";
import template from "./routes/getHomeTemplate.js";

const router = Router();

router.use(template);

export default router;
