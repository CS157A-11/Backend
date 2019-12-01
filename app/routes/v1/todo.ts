import { client } from "../../app";
import express from "express";
const todoRouter = express.Router();

todoRouter.post("/", (req, res, next) => {
  console.log("POST");
  const postData = req.body;
  console.log(postData);
  client.query("INSERT INTO todos SET ?", postData, (err, results) => {
    if (err) throw err;
    res.send(postData);
  });
});

// READ (all todos)
todoRouter.get("/", (req, res, next) => {
  console.log("GET");
  client.query("SELECT * FROM todos", (err, results) => {
    res.json(results);
  });
});

// READ (single todo)
todoRouter.get("/:todo_id", (req, res, next) => {
  console.log("GET");
  client.query("SELECT FROM todos where id=?", [req.params.todo_id], function(
    err,
    results
  ) {
    if (err) throw err;
    res.json(results);
  });
});

// UPDATE
todoRouter.put("/:todo_id", (req, res, next) => {
  console.log("PUT");
  client.query(
    "UPDATE todos SET name=? where id=?",
    [req.params.name, req.params.todo_id],
    function(err, results) {
      if (err) throw err;
      res.json(results);
    }
  );
});

// DELETE
todoRouter.delete("/:todo_id", (req, res, next) => {
  console.log(req.body);
  client.query("DELETE FROM todos where id=?", [req.body.todo_id], function(
    err,
    results
  ) {
    if (err) throw err;
    res.end("Todo has been deleted!");
  });
});

export { todoRouter };
