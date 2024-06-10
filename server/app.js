import express from "express";
import "dotenv/config";
import users from "./users.js";

const app = express();
const PORT = process.env.PORT;

//middlewares
//app.set(express.json());
app.get("/", () => {
  res.send("API is working properly");
});
app.get("/api", (req, res) => {
  res.json({ students: ["one", "two", "three", "four", "five"] });
});
app.get("/api/users", (req, res) => {
  res.send(users);
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
