import express from "express";
import { errorHandler } from "./middlewares/error.middleware";
import { notFound } from "./middlewares/notFound.middleware";
import healthRouter from "./routes/health.route";
import { requestLogger } from "./middlewares/requestLogger.middleware";

const app = express();

app.use(requestLogger);
app.use(express.json());
app.use("/health", healthRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
