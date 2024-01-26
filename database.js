const mysql = require("mysql2");
require("dotenv").config();

//DB connection
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

//DB connection error handling
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("My database connected successfully");
  }
});

module.exports = connection;
