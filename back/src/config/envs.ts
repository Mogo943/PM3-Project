import "dotenv/config"

export const PORT = process.env.PORT

export const DB_HOST = process.env.DB_HOST || "No Host";
export const DB_PORT = process.env.DB_PORT || "No Port";
export const DB_USERNAME = process.env.DB_USERNAME || "No User";
export const DB_PASSWORD = process.env.DB_PASSWORD || "No Password";
export const DB_NAME = process.env.DB_NAME || "No Name"
