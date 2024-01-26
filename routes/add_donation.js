const express = require("express");
const router = express.Router();
const connection = require("../database");

router.post("/", (req, res) => {
  var action = req.body.action;

  if (action == "fetch") {
    var query = "SELECT * from orders ORDER BY id desc";
    connection.query(query, function (error, data) {
      res.json({
        data: data,
      });
    });
  }

  if (action == "Add") {
    var { name, totalNumber, dispatch, destination, month, region } = req.body;
    connection.query(
      "INSERT INTO orders SET name =?,totalNumber=?,dispatch=?,destination=?,month=?,region=?",
      [name, totalNumber, dispatch, destination, month, region],
      () => res.json({ message: "Data Added" })
    );
  }

  if (action == "fetch_single") {
    var id = req.body.id;
    var query = `SELECT * FROM orders where id = "${id}"`;

    connection.query(query, (data) => res.json(data[0]));
  }

  if (action == "Edit") {
    var { id, name, totalNumber, dispatch, destination, month, region } =
      req.body;
    connection.query(
      "UPDATE orders SET name =?,totalNumber=?,dispatch=?,destination=?,month=?,region=? WHERE id =?",
      [name, totalNumber, dispatch, destination, month, region, id],
      () => res.json({ message: "Data Edited" })
    );
  }

  if (action == "delete") {
    var { id } = req.body;
    var query = `DELETE FROM orders where id = "${id}"`;

    connection.query(query, () => res.json({ message: "Data Deleted" }));
  }
});

module.exports = router;
