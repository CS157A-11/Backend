import express from "express";

import { testRouter } from "./test";
import { todoRouter } from "./todo";
import { userRouter } from "./user";
import { habitRouter } from "./habit";
import { moodOfTheDayRouter } from "./moodOfTheDay";

const router = express.Router();

router.use("/test", testRouter);
router.use("/todos", todoRouter);
router.use("/habits", habitRouter);
router.use("/moodoftheday", moodOfTheDayRouter);
router.use("/users", userRouter);

export { router };
