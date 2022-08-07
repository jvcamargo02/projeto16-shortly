import { Router } from "express";
import {
    signInController,
    signUpController,
} from "../controllers/authController.js";
import {
    findUser,
    validateSignIn,
} from "../middlewares/signInValidate.js";
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
auth.post(
    "/signin",
    validateSignIn,
    findUser,
    signInController
);

export default auth;
