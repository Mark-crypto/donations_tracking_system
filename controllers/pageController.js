const connection = require("../database");

exports.super_admin = (req, res) => {
  res.render("sup-admin");
};
exports.qr = (req, res) => {
  res.render("qr");
};
exports.guest = (req, res) => {
  res.render("guest");
};
exports.map = (req, res) => {
  res.render("maps");
};
exports.add_donation = (req, res) => {
  res.render("add-donation");
};
exports.dep_admin = (req, res) => {
  res.render("dep-admin");
};
exports.recepients_edit = (req, res) => {
  res.render("recepient");
};
exports.recepients_view = (req, res) => {
  var query = "SELECT * FROM recepient ORDER by id DESC";
  connection.query(query, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.render("recepients-view", { action: "list", recData: data });
    }
  });
};
exports.donation_view = (req, res) => {
  var query = "SELECT * FROM orders ORDER BY id DESC";
  connection.query(query, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.render("donation-view", { action: "list", donData: data });
    }
  });
};
exports.log = (req, res) => {
  var query = "SELECT * FROM logs_orders ORDER by id DESC";
  connection.query(query, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.render("logs", { action: "list", orderData: data });
    }
  });
};
exports.map = (req, res) => {
  var query = "SELECT * FROM location ";
  connection.query(query, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.render("map-view", { action: "list", locationData: data });
    }
  });
};
exports.reports = (req, res) => {
  var query = "SELECT * FROM recepient ORDER by id DESC";
  connection.query(query, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.render("reports", { action: "list", barData: data });
    }
  });
};
