import { router } from "./routes/v1/index";
import mysql from "mysql";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

export const client = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3306,
  database: "cs157a"
});

client.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + client.threadId);
});

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/v1/", router);

export { app };
