import { Router } from "express";
// import { verifyLogin, registerUser } from "../controllers/auth.js";
import "../strategy/local-strategy.js";
import passport from "passport";
import crypto from "crypto";
import connection from "../database.js";

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);
// router.post("/registration", registerUser);
router.post("/registration", (req, res, next) => {
  const { email, password } = req.body;
  const salt = crypto.randomBytes(16);
  const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");
  //Store values in database
  connection.execute(
    "INSERT INTO users SET email =?,password=?,salt=?",
    [email, hashedPassword, salt],
    (error) => {
      if (error) {
        // next(err)
        return res
          .status(500)
          .send({ error: "Internal server error occurred" });
      }
    }
  );
  //retrieve user from database
  connection.execute(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    (err, user) => {
      //handling error
      if (err) {
        return res
          .status(500)
          .send({ error: "Internal server error occurred" });
      }
      req.login(user, (err) => {
        if (err) {
          return res
            .status(500)
            .send({ error: "Internal server error occurred" });
        }
        res.redirect("/");
      });
    }
  );
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

export default router;
