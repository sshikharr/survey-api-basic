import dotenv from "dotenv";
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    db: process.env.DATABASE_URL as string
};