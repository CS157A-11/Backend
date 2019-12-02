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

userRouter.post("/login", (req, res) => {
  console.log("login");
  const { email, password } = req.body;
  try {
    client.query(
      "SELECT * FROM users WHERE users.email = ?",
      [email],
      (e, r) => {
        const user = r[0];
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {
            const token = jsonwebtoken.sign(
              { email: user.email },
              process.env.SECRET,
              {
                expiresIn: 3600
              }
            );
            res.send({ token });
          }
        }
        return res.status(401).json({ msg: "error" });
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error" });
  }
});

userRouter.post("/signup", (req, res, next) => {
  console.log("sigunup");
  const { email, password, name } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
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
  } catch (err) {
    return res.status(500).json({ msg: "Internal server error" });
  }
});

export { userRouter };
