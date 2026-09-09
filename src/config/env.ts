import dotenv from "dotenv";

dotenv.config();

export const env = {
PORT: process.env.PORT || "5000",
MONGO_URI: process.env.MONGO_URI || "",
JWT_SECRET: process.env.JWT_SECRET || "",
JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET, 
ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
NODE_ENV: process.env.NODE_ENV,
ACCESS_TOKEN_MAX_AGE: process.env.ACCESS_TOKEN_MAX_AGE,
REFRESH_TOKEN_MAX_AGE: process.env.REFRESH_TOKEN_MAX_AGE,
FROND_END_URL: process.env.FROND_END_URL,


};