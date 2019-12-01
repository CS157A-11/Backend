import { client } from "../../app";
import express from "express";
import { ApiError } from "../../utils/APIerror";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const userRouter = express.Router();

userRouter.get("/userinfo", (req, res, next) => {
  client.query(
    "SELECT * FROM users WHERE users.email = ?",
    [req.body.email],
    (e, r) => res.json(r)
  );
});

userRouter.post("/", (req, res, next) => {
  console.log("get");
  const { email, password, name } = req.body;
  try {
    // let user = null;
    // client.query(
    //   "SELECT * FROM users WHERE users.email = ?",
    //   [req.body.email],
    //   (e, r) => {res.json(r)}
    // );
    // console.log("user", user);
    // if (user)

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    // console.log("salt", salt);
    // console.log("hash", hashedPassword);
    const newUser = {
      email: email,
      password: hashedPassword,
      name: name
    };
    client.query("INSERT INTO users SET ?", newUser, (e, r) => {
      if (e) throw e;
      const token = jsonwebtoken.sign(
        { email: newUser.email },
        process.env.SECRET,
        {
          expiresIn: 3600
        }
      );
      res.send({ token, newUser });
    });
    // const token = jsonwebtoken.sign({ email: user.email }, process.env.SECRET, {
    //   expiresIn: 3600
    // });
    // console.log("token", token);
    // return res.status(200).json({ token, user });
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error" });
  }
});

export { userRouter };
