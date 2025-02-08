import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
});

const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
if (conn) console.log("Database has connected successfully");
// connection.connect((error) => {
//   if (error) {
//     return console.log(`An error has occurred: ${error}`);
//   } else {
//     console.log("Database has connected successfully");
//   }
// });

export default connection;
