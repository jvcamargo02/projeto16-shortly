import { Router } from "express";
import { signUpController } from "../controllers/authController.js";
import {
    confirmPassword,
    findEmailInDb,
    validateSignUp,
} from "../middlewares/signUpValidate.js";

const auth = Router();

auth.post(
    "/signup",
    validateSignUp,
    confirmPassword,
    findEmailInDb,
    signUpController
);
auth.post("/signin");

export default auth;
