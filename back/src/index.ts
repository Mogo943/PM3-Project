import "reflect-metadata"

import server from "./server";
import { DB_PORT, PORT } from "./config/envs"
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(() => {
    console.log(`Conneted with DB on port: ${DB_PORT}`)
    server.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
})
