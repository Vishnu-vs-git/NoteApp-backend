import mongoose from "mongoose";
import { env } from "./env";
export const connectDB = async () => {
    try {
        const mongoUri = env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in environment variables.");
        }
        await mongoose.connect(mongoUri);
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
    }
};
//# sourceMappingURL=db.js.map