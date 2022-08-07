import { clientDb } from "../database/client";

async function getHomeTemplate (){
    return clientDb.query("SELECT * FROM template")
}

export const templateRepository = {
    getHomeTemplate
}