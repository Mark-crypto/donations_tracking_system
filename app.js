const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const pageRoute = require("./routes/pages");
const donationRoute = require("./routes/add_donation");
const recepientRoute = require("./routes/recepient");

//accessing public file
app.use(express.static("public"));
//accept form data aka parse url encoded bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//setting our views
app.set("view engine", "ejs");
//Define routes
app.use("/", pageRoute);
app.use("/add-donation", donationRoute);
app.use("/recepient", recepientRoute);

//connnecting our server to port
app.listen(PORT, () => {
  console.log(`Server is listening from: http://localhost:${PORT}`);
});
