import express from "express";

import { testRouter } from "./test";
import { todoRouter } from "./todo";
import { userRouter } from "./user";
import { habitRouter } from "./habit";

const router = express.Router();

router.use("/test", testRouter);
router.use("/todos", todoRouter);
router.use("/habits", habitRouter);
router.use("/users", userRouter);

export { router };
