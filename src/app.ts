import cookieParser from "cookie-parser";
import express from"express";
import cors from"cors"
import { env } from "./config/env";

const app = express();
app.use(cors({
    origin: env.FROND_END_URL,
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());
export default app