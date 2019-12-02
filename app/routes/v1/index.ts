import express from "express";

import { testRouter } from "./test";
import { todoRouter } from "./todo";
import { userRouter } from "./user";
import { habitRouter } from "./habit";
import { moodOfTheDayRouter } from "./moodOfTheDay";
import { completeTodoRouter } from "./completeTodo";
import { completeHabitRouter } from "./completeHabit";

const router = express.Router();

router.use("/test", testRouter);
router.use("/todos", todoRouter);
router.use("/habits", habitRouter);
router.use("/moodoftheday", moodOfTheDayRouter);
router.use("/completetodos", completeTodoRouter);
router.use("/completehabits", completeHabitRouter);
router.use("/users", userRouter);

export { router };
