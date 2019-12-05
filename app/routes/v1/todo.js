import { client } from "../../app";
import express from "express";
import { verifyToken } from "../../utils/auth";

const todoRouter = express.Router();

todoRouter.use(verifyToken);

todoRouter.post("/", (req, res, next) => {
  console.log("POST");
  const postData = req.body;
  client.query("INSERT INTO todos SET ?", postData, (err, results) => {
    if (err) throw err;
    console.log(results);
    const newUserTodo = {
      todo_id: results.insertId,
      email: req.email
    };
    client.query("INSERT INTO users_todos SET ?", newUserTodo, (err, res) => {
      if (err) throw err;
    });
    res.send(postData);
  });
});

// READ (all todos)
todoRouter.get("/", (req, res, next) => {
  console.log("GET");
  console.log(req.email);
  client.query(
    "select * from todos where todos.id in (select todo_id from users_todos where email=?)",
    [req.email],
    (err, results) => {
      res.json(results);
    }
  );
});

// READ (single todo)
todoRouter.get("/:todo_id", (req, res, next) => {
  console.log("GET");
  client.query(
    "SELECT FROM todos where id=?",
    [req.params.todo_id],
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

// UPDATE for isActive
todoRouter.put("/updateIsActive", (req, res, next) => {
  console.log("PUT");
  client.query(
    "UPDATE todos SET is_active=? where id=?",
    [req.body.is_active, req.body.todo_id],
    function(err, results) {
      if (err) throw err;
      res.json(results);
    }
  );
});

// DELETE
// todoRouter.delete("/:todo_id", (req, res, next) => {
//   console.log(req.body);
//   client.query("DELETE FROM todos where id=?", [req.body.todo_id], function(
//     err,
//     results
//   ) {
//     if (err) throw err;
//     res.end("Todo has been deleted!");
//   });
// });

export { todoRouter };
