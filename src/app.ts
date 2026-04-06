import express from 'express';
import cors from 'cors';
import { db } from './db/index.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test-db", async (req, res) => {
    try {
        const result = await db.execute("SELECT 1");
        res.json({
            success: true,
            message: "Database connected ✅",
            result,
        });
    } catch (error) {
        console.error("Database connection failed ❌", error);
        res.status(500).json({
            success: false,
            message: "Database connection failed ❌",
            error,
        });
    }
});

export default app;