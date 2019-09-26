import { testRouter } from "./test";
import express from "express";
const router = express.Router();

router.use("/test", testRouter);

export { router };
