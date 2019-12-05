import { client } from "../../app";
import express from "express";
import { verifyToken } from "../../utils/auth";

const completeTodoRouter = express.Router();

completeTodoRouter.use(verifyToken);

completeTodoRouter.post("/", (req, res, next) => {
  console.log("POST");
  client.query(
    "SELECT * FROM todos where id=?",
    [req.body.todo_id],
    (err, results) => {
      if (err) throw err;
      const postData = {
        ...req.body,
        completed_date: new Date(req.body.completed_date),
        email: req.email
      };
      client.query(
        "INSERT INTO users_completes_todos SET ?",
        postData,
        (err, res) => {
          if (err) throw err;
        }
      );
      res.json(postData);
    }
  );
});

// READ (all todos)
completeTodoRouter.get("/", (req, res, next) => {
  console.log("GET");
  client.query(
    "select * from users_completes_todos where email=?",
    [req.email],
    (err, results) => {
      res.json(results);
    }
  );
});

// // READ (single todo)
// completeTodoRouter.get("/:todo_id", (req, res, next) => {
//   console.log("GET");
//   client.query(
//     "SELECT FROM todos where id=?",
//     [req.params.todo_id],
//     (err, results) => {
//       if (err) throw err;
//       res.json(results);
//     }
//   );
// });

// // UPDATE for isActive
// completeTodoRouter.put("/:todo_id", (req, res, next) => {
//   console.log("PUT");
//   client.query(
//     "UPDATE todos SET is_active=? where id=?",
//     [req.params.isActive, req.params.todo_id],
//     function(err, results) {
//       if (err) throw err;
//       res.json(results);
//     }
//   );
// });

// DELETE
// completeTodoRouter.delete("/:todo_id", (req, res, next) => {
//   console.log(req.body);
//   client.query("DELETE FROM todos where id=?", [req.body.todo_id], function(
//     err,
//     results
//   ) {
//     if (err) throw err;
//     res.end("Todo has been deleted!");
//   });
// });

export { completeTodoRouter };
