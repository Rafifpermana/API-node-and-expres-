import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import authRoute from "./routes/authRoute.js";
import db from "./config/database.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(authRoute);

app.listen(5000, () => console.log("Server Running..."));
