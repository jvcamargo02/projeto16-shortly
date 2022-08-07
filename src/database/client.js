import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "joao2002",
    database: "shortly",
});

export { connection as clientDb };
