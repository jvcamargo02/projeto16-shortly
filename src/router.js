import { Router } from "express";
import ranking from "./routes/ranking";
import signIn from "./routes/signin";
import signUp from "./routes/signup";
import urls from "./routes/urls";
import users from "./routes/users";

const router = Router();

router.use(template);

export default router;
