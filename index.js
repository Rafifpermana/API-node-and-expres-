import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import authRoute from "./routes/authRoute.js";
import db from "./config/database.js";
import errorHandler from "./errorHandler.js";
import apicache from "apicache";

const app = express();
const cache = apicache.middleware;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=86400");
  next();
});

app.use("/api", cache("5 minutes"), UserRoute);
app.use("/auth", authRoute);

app.use(errorHandler);

app.listen(5000, () => console.log("Server Running..."));
