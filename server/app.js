import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import router from "./routes/index.route.js";
import session from "express-session";
import passport from "passport";
//import cookieParser from "cookie-parser";
//import "./strategy/local-strategy.js";

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());
// app.use(
//   session({
//     secret: process.env.SECRET_KEY,
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//       maxAge: 60000 * 60,
//     },
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

//routes
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
