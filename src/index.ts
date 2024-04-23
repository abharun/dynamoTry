import dotenv from "dotenv";
import express, { NextFunction } from "express";
import { Logger } from "./utils";
import { SERVER_STARTED } from "./consts/messages";
import appRouter from "./routes";
import cors from "cors";
import { createTables } from "./db";

dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .use("/health", (_req, res) => res.send("OK"))
  .use("/", appRouter);

const PORT = process.env.PORT || 4000;

createTables(["posts"]);

app.listen(PORT, () => {
    Logger.info(SERVER_STARTED);
})

export default app;