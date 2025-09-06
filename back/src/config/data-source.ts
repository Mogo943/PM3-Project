import { DataSource } from "typeorm"
import { UserEntitie } from "../entities/userEntitie"
import { AppointmentEntitie } from "../entities/appointmentEntitie"
import { CredentialEntitie } from "../entities/credentialEntitie"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "7598",
    database: "users",
    synchronize: true,
    logging: false,
    entities: [UserEntitie, AppointmentEntitie, CredentialEntitie],
    subscribers: [],
    migrations: [],
})