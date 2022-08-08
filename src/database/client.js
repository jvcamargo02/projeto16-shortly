import pg from "pg";
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg;

const connection = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export { connection as clientDb };
