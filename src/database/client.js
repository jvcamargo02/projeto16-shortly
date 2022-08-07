import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "joao",
    password: "joao2002",
    database: "template",
});

export { connection as clientDb };
