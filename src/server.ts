import app from "./app.js";
import dotenv from "dotenv"
import { testConnection } from "./db/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // Test database connection on startup
        await testConnection();
        
        app.listen(PORT, () => {
            console.log(`🚀 Server jumping at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
