import { NextFunction, Request, Response } from "express";
import { client } from "../../app";
import express from "express";

const testRouter = express.Router();

testRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("get");
  client.query("SELECT * FROM emp", (e, r) => {
    res.json(r);
  });
});

testRouter.delete("/delete", (req: Request, res: Response, next: NextFunction) => {
  console.log("delete");
  client.query("DELETE * FROM emp", (e, r) => {
    res.json(r);
  });
});

export { testRouter };
