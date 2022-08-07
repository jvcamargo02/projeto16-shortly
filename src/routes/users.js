import { Router } from "express";

const users = Router();

users.get("/users/me", (req, res) => res.send("Hello world"));

export default users;