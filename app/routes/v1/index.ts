import { testRouter } from "./test";
import { todoRouter } from "./todo";
import { userRouter } from "./user";
import express from "express";
const router = express.Router();

router.use("/test", testRouter);
router.use("/todos", todoRouter);
router.use("/users", userRouter);

export { router };
