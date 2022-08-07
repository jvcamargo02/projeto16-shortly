import { Router } from "express";

const signUp = Router();

signUp.post("/signup", (req, res) => res.send("Hello world"));

export default signUp;