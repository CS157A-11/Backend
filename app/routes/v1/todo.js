"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const express_1 = __importDefault(require("express"));
const todoRouter = express_1.default.Router();
exports.todoRouter = todoRouter;

// CRUD functionality for user's todo list 

// CREATE 
todoRouter.post("/todos", (req, res, next) => { 
    console.log("POST");
    var postData = req.body; 
    app_1.client.query("INSERT INTO todos SET ?", postData, function(err, results) { 
        if(err) throw err; 
        res.end(JSON.stringify(results)); // res.end() method sends data to client a json string through the JSON.stringify() method.
    }); 
}); 

// READ (all todos) 
todoRouter.get("/todos", (req, res, next) => {
    console.log("GET");
    app_1.client.query("SELECT * FROM todos", (err, results) => {
        res.end(JSON.stringify(results)); 
    });
});

// READ (single todo) 
todoRouter.get("/todos/:todo_id", (req, res, next) => { 
    console.log("GET");
    app_1.client.query("SELECT FROM todos where id=?", [req.params.todo_id], function(err, results) { 
        if(err) throw err; 
        res.end(JSON.stringify(results));  
    }); 
}); 

// UPDATE 
todoRouter.put("/todos/:todo_id", (req, res, next) => { 
    console.log("PUT");
    app_1.client.query("UPDATE todos SET name=? where id=?", [req.params.name, req.params.todo_id], function(err, results) { 
        if(err) throw err; 
        res.end(JSON.stringify(results)); 
    }); 
}); 

// DELETE 
todoRouter.delete("/todos/:todo_id", (req, res, next) => { 
    console.log(req.body); 
    app_1.client.query("DELETE FROM todos where id=?", [req.body.todo_id], function(err, results) { 
        if(err) throw err; 
        res.end("Todo has been deleted!"); 
    }); 
}); 

// DELETE (all todos) 
todoRouter.delete("/todos/:todo_id", (req, res, next) => { 
    console.log(req.body); 
    app_1.client.query("DELETE * FROM todos", (err, results) => { 
        if(err) throw err; 
        res.end("All todos has been deleted!"); 
    }); 
}); 