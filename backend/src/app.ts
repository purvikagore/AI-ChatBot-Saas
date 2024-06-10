import express from "express"
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from "./routes/index.js";
config(); //used to connect to mongo
const app = express();

// middleware
app.use(express.json());

// remove it in production
app.use(morgan("dev"));

// after express goes to this end point, it will handle it using aprouter
app.use("/api/v1", appRouter);

export default app;