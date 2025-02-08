import connection from "../database.js";
import bcrypt from "bcryptjs";

export const verifyLogin = (req, res) => {
  const { email, hashedPassword } = req.body;
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        res.status(500).send({ error: "Internal server error" });
      }
      if (results.length === 0) {
        res.status(401).send({ error: "Invalid email or password" });
      } else {
        const user = results[0];
        const isMatch = await bcrypt.compare(hashedPassword, user.password);
        if (isMatch) {
          res.status(200).json({ message: "Login successful" });
        } else {
          res.status(401).json({ error: "Invalid email or password" });
        }
      }
    }
  );
};

export const registerUser = (req, res) => {
  const { fname, lname, email, role, hashedPassword } = req.body;
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        res.status(500).json({ error: "Server error" });
      }
      if (results.length > 0) {
        res.status(401).json({ error: "User already exists" });
      } else {
        //const hashedPassword = await bcrypt.hash(password, 10);
        connection.query(
          "INSERT INTO users (fname,lname,email,role,password) VALUES (?,?,?,?,?)",
          [fname, lname, email, role, hashedPassword],
          (error) => {
            if (error) {
              res.status(500).json({ error: "Server error" });
            } else {
              res.status(201).json({ message: "User registered" });
            }
          }
        );
      }
    }
  );
};

export const verifyUser = (req, res) => {
  const { email } = req.body;
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        res.status(500).send({ error: "Internal server error" });
      }
      if (results.length === 0) {
        res.status(401).send({ error: "User not found" });
      } else {
        res.status(200).json({ message: "User found" });
      }
    }
  );
};
