import { Router } from "express";
import {
    signInController,
    signUpController,
    socialLoginController
} from "../controllers/authController.js";
import {
    findUser,
    findSocialUser,
    validateSignIn,
    validateSocialLogin
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
    "/socialLogin", 
    validateSocialLogin,
    findSocialUser, 
    socialLoginController
)

auth.post(
    "/signin",
    validateSignIn,
    findUser,
    signInController
);

export default auth;
