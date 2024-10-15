import { Parser } from "@json2csv/plainjs";
import connection from "../database.js";

const parser = new Parser();

export const recepientsCSV = (req, res) => {
  try {
    var query = "SELECT * FROM recepient";
    connection.query(query, (error, data) => {
      if (error)
        return res.status(500).send({ error: "Internal server error" });
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
      var json_data = new parser({ file_header });
      var csv_data = json_data.parse(mysql_data);
      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=RecipientData.csv"
      );
      res.status(200).end(csv_data);
    });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error occurred" });
  }
};
export const donationsCSV = (req, res) => {
  try {
    var query = "SELECT * FROM orders";
    connection.query(query, (error, data) => {
      if (error)
        return res.status(500).send({ error: "Internal server error" });
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
      var json_data = new parser({ file_header });
      var csv_data = json_data.parse(mysql_data);
      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=DonationData.csv"
      );
      res.status(200).end(csv_data);
    });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error occurred" });
  }
};
export const logsCSV = (req, res) => {
  try {
    var query = "SELECT * FROM logs_orders";
    connection.query(query, (error, data) => {
      if (error)
        return res.status(500).send({ error: "Internal server error" });
      var mysql_data = JSON.parse(JSON.stringify(data));
      //convert from json to csv
      var file_header = ["action", "time_stamp", "user"];
      var json_data = new parser({ file_header });
      var csv_data = json_data.parse(mysql_data);
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=LogsData.csv");
      res.status(200).end(csv_data);
    });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error occurred" });
  }
};
