var data_exporter = require("json2csv").Parser;
var connection = require("../database");

exports.csv_recepients = (req, res) => {
  var query = "SELECT * FROM recepient";
  connection.query(query, (error, data) => {
    var mysql_data = JSON.parse(JSON.stringify(data));
    //convert from json to csv
    var file_header = [
      "firstName",
      "lastName",
      "national_ID",
      "donations",
      "totalNo",
      "familySize",
    ];
    var json_data = new data_exporter({ file_header });
    var csv_data = json_data.parse(mysql_data);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=data.csv");
    res.status(200).end(csv_data);
  });
};
exports.csv_donations = (req, res) => {
  var query = "SELECT * FROM orders";
  connection.query(query, (error, data) => {
    var mysql_data = JSON.parse(JSON.stringify(data));
    //convert from json to csv
    var file_header = [
      "item",
      "totalNumber",
      "dispatch",
      "destination",
      "month",
      "region",
    ];
    var json_data = new data_exporter({ file_header });
    var csv_data = json_data.parse(mysql_data);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=data.csv");
    res.status(200).end(csv_data);
  });
};
exports.csv_logs = (req, res) => {
  var query = "SELECT * FROM logs_orders";
  connection.query(query, (error, data) => {
    var mysql_data = JSON.parse(JSON.stringify(data));
    //convert from json to csv
    var file_header = ["action", "time_stamp", "user"];
    var json_data = new data_exporter({ file_header });
    var csv_data = json_data.parse(mysql_data);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=data.csv");
    res.status(200).end(csv_data);
  });
};
