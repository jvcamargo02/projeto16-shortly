import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router.js";
import { clientDb } from "./database/client.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor is running on port ${PORT}`));


/* SELECT   json_build_array(urls) as teste, u.id, u.name, SUM("visitCount") FROM users u JOIN urls ON u.id = urls."userId" WHERE u.id = 4 GROUP BY (u.id, urls.*) */