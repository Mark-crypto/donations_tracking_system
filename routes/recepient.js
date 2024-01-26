const express = require("express");
const router = express.Router();
const connection = require("../database");

router.post("/", (req, res) => {
  var action = req.body.action;

  if (action == "fetch") {
    var query = "SELECT * from recepient ORDER BY id desc";
    connection.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }

  if (action == "Add") {
    var {
      firstName,
      lastName,
      national_Id,
      orders,
      totalNo,
      familySize,
      region,
    } = req.body;
    connection.query(
      `INSERT INTO recepient SET firstName =?,lastName = ?,national_Id = ?,orders = ?,totalNo = ?,familySize = ?,region = ?`,
      [firstName, lastName, national_Id, orders, totalNo, familySize, region],
      () => res.json({ message: "Data Added" })
    );
  }

  if (action == "fetch_single") {
    var { id } = req.body;
    var query = `SELECT * FROM recepient where id = "${id}"`;

    connection.query(query, (data) => res.json(data[0]));
  }

  if (action == "Edit") {
    var {
      id,
      firstName,
      lastName,
      national_Id,
      orders,
      totalNo,
      familySize,
      region,
    } = req.body;

    connection.query(
      "UPDATE recepient SET firstName = ?,lastName = ?,national_Id = ?,orders = ?, totalNo = ?, familySize = ?,region = ? WHERE id= ?",
      [
        firstName,
        lastName,
        national_Id,
        orders,
        totalNo,
        familySize,
        region,
        id,
      ],
      () => res.json({ message: "Data Edited" })
    );
  }

  if (action == "delete") {
    var { id } = req.body;
    var query = `DELETE FROM recepient where id = "${id}"`;

    connection.query(query, () => res.json({ message: "Data Deleted" }));
  }
});

module.exports = router;
