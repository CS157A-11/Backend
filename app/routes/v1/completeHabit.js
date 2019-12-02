import { client } from "../../app";
import express from "express";
import { verifyToken } from "../../utils/auth";

const completeHabitRouter = express.Router();

completeHabitRouter.use(verifyToken);

completeHabitRouter.post("/", (req, res, next) => {
  console.log("POST");
  client.query(
    "SELECT * FROM habits where id=?",
    [req.body.habit_id],
    (err, results) => {
      if (err) throw err;
      const postData = {
        ...req.body,
        completed_date: new Date(),
        email: req.email
      };
      client.query(
        "INSERT INTO users_completes_habits SET ?",
        postData,
        (err, res) => {
          if (err) throw err;
        }
      );
      res.json(postData);
    }
  );
});

// READ (all habits)
completeHabitRouter.get("/", (req, res, next) => {
  console.log("GET");
  client.query(
    "select * from users_completes_habits where email=?",
    [req.email],
    (err, results) => {
      res.json(results);
    }
  );
});

export { completeHabitRouter };
