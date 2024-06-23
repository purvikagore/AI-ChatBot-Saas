import express from "express";
import { config } from "dotenv";
import morgan from 'morgan';
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
config(); //used to connect to mongo
const app = express();
// middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// remove it in production
app.use(morgan("dev"));
// after express goes to this end point, it will handle it using aprouter
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map