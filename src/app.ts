import cookieParser from "cookie-parser";
import express from"express";
import cors from"cors"
import { env } from "./config/env";
import { errorHandler } from "./middleware/error-handler.middleware";
import authRoutes from"./routes/auth.routes"

const app = express();
app.use(cors({
    origin: env.FROND_END_URL,
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use(errorHandler);
export default app