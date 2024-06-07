import express from "express";
import { config } from "dotenv";
config(); //used to connect to mongo
const app = express();
// middleware
app.use(express.json());
export default app;
//# sourceMappingURL=app.js.map