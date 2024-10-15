import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import router from "./routes/index.route";
// import connection from "./database";

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
