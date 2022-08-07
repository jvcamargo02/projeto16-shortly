import { Router } from "express";

const template = Router();

template.get("/", (req, res) => res.send("Hello world"));

export default template;
