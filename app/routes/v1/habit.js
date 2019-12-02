import { client } from "../../app";
import express from "express";
import { verifyToken } from "../../utils/auth";

const habitRouter = express.Router();

habitRouter.use(verifyToken);

habitRouter.post("/", (req, res, next) => {
  console.log("POST");
  const postData = req.body;
  client.query("INSERT INTO habits SET ?", postData, (err, results) => {
    if (err) throw err;
    console.log(results);
    const newUserTodo = {
      habit_id: results.insertId,
      email: req.email
    };
    client.query("INSERT INTO users_habits SET ?", newUserTodo, (err, res) => {
      if (err) throw err;
    });
    res.send(postData);
  });
});

// READ (all habits)
habitRouter.get("/", (req, res, next) => {
  console.log("GET");
  console.log(req.email);
  client.query(
    "select * from habits where habits.id in (select habit_id from users_habits where email=?)",
    [req.email],
    (err, results) => {
      res.json(results);
    }
  );
});

// READ (single todo)
habitRouter.get("/:habit_id", (req, res, next) => {
  console.log("GET");
  client.query(
    "SELECT FROM habits where id=?",
    [req.params.habit_id],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// UPDATE for isActive
habitRouter.put("/:habit_id", (req, res, next) => {
  console.log("PUT");
  client.query(
    "UPDATE habits SET is_active=? where id=?",
    [req.params.isActive, req.params.habit_id],
    function(err, results) {
      if (err) throw err;
      res.json(results);
    }
  );
});

export { habitRouter };
