import express from 'express';
import cors from 'cors';
import router from './routes/route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", router)

export default app;