import { Router } from "express";
import {
    signInController,
    signUpController,
} from "../controllers/authController.js";
import {
    findUser,
    validateSignIn,
} from "../middlewares/authMiddlewares/signInValidate.js";
import {
    confirmPassword,
    findEmailInDb,
    validateSignUp,
} from "../middlewares/authMiddlewares/signUpValidate.js";

const auth = Router();

auth.post(
    "/signup",
    validateSignUp,
    confirmPassword,
    findEmailInDb,
    signUpController
);
auth.post(
    "/signin",
    validateSignIn,
    findUser,
    signInController
);

export default auth;
