import { client } from "../../app";
import express from "express";
import { verifyToken } from "../../utils/auth";

const moodOfTheDayRouter = express.Router();

moodOfTheDayRouter.use(verifyToken);

moodOfTheDayRouter.post("/", (req, res, next) => {
  console.log("POST");
  const postData = { ...req.body, date: new Date(req.body.date) };
  client.query(
    "INSERT INTO moods_of_the_day SET ?",
    postData,
    (err, results) => {
      if (err) throw err;
      console.log(results);
      const newUserTodo = {
        mood_id: results.insertId,
        email: req.email
      };
      client.query("INSERT INTO users_moods SET ?", newUserTodo, (err, res) => {
        if (err) throw err;
      });
      res.send(postData);
    }
  );
});

// READ (all moods_of_the_day)
moodOfTheDayRouter.get("/", (req, res, next) => {
  console.log("GET");
  console.log(req.email);
  client.query(
    "select * from moods_of_the_day where moods_of_the_day.mood_id in (select mood_id from users_moods where email=?)",
    [req.email],
    (err, results) => {
      res.json(results);
    }
  );
});

moodOfTheDayRouter.get("/availablemoods", (req, res, next) => {
  console.log("GET");
  client.query("SELECT * FROM moods", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// UPDATE for isActive
moodOfTheDayRouter.put("/:mood_id", (req, res, next) => {
  console.log("PUT");
  client.query(
    "UPDATE moods_of_the_day SET is_active=? where id=?",
    [req.params.isActive, req.params.mood_id],
    function(err, results) {
      if (err) throw err;
      res.json(results);
    }
  );
});

// DELETE
// moodOfTheDayRouter.delete("/:mood_id", (req, res, next) => {
//   console.log(req.body);
//   client.query("DELETE FROM moods_of_the_day where id=?", [req.body.mood_id], function(
//     err,
//     results
//   ) {
//     if (err) throw err;
//     res.end("Todo has been deleted!");
//   });
// });

export { moodOfTheDayRouter };
