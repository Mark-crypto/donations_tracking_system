//cookies - data web server sends to browser - important because http is stateless
//Session represent the duration of the user's visit to the website
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import "./strategy/local-strategy.js";
import MongoStore from "connect-mongo";

const app = express();
const connection = mongoose.connect("mongodb://localhost:27017/auth");
if (!connection) {
  console.log("Error connecting to database");
  //process.exit(1);
} else {
  console.log("Connected to database");
}
//middlewares
app.use(express.json());
app.use(cookieParser("this is my secret"));
app.use(
  session({
    secret: "this is my secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
  res.send({ message: "You are logged in" });
});

app.post("/api/logout", (req, res) => {
  //check to see if user is not logged in
  req.logout((err) => {
    if (err) throw new Error(err);
    res.send({ message: "You are logged out" });
  });
});

app.get("/", (req, res) => {
  console.log("Session:", req.session, "Id:", req.sessionID);
  req.session.visited = true;
  req.sessionStore.get(req.sessionID, (err, sessionData) => {
    if (err) throw err;
    console.log(sessionData);
  });
  res.cookie("Hello", "World", { maxAge: 60000, signed: true });
  res.send({ message: "Hello World" });
});
app.get("/api", (req, res) => {
  //console.log(req.cookies);
  if (req.signedCookies.Hello && req.signedCookies.Hello === "World") {
    console.log(req.session + "Id: " + req.sessionID);
    return res.send({ message: "Hello from api" });
  }
  return res.send({ message: "You are not logged in" });
});

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
