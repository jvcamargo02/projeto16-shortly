import { Router } from "express";
import auth from "./routes/authRoute.js";
import ranking from "./routes/ranking.js";
import urls from "./routes/urls.js";
import users from "./routes/users.js";

const router = Router();


router.use(auth);
router.use(urls);
router.use(users);
router.use(ranking);

export default router;
