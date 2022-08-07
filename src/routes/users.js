import { Router } from "express";
import { getUserData } from "../controllers/usersController.js";
import { validateToken } from "../middlewares/tokenValidate.js";

const users = Router();

users.get("/users/me", validateToken, getUserData );

export default users;