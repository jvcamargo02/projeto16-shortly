import { Router } from "express";

const signIn = Router();

signIn.post("/signin", (req, res) => res.send("Hello world"));

export default signIn;