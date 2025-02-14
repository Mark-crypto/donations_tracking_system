import connection from "../database.js";

export const getDonationLogs = (req, res) => {
  connection.execute(
    "SELECT * FROM logs ORDER by log_id desc",
    (error, data) => {
      if (error) {
        return res
          .status(500)
          .send({ message: "Internal server error occurred" });
      }
      return res.status(200).send({ data });
    }
  );
  // if (!req.user) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {

  // }
};

export const getRecipientLogs = (req, res) => {
  connection.execute(
    "SELECT * FROM logs_recipient ORDER by log_id desc",
    (error, data) => {
      if (error) {
        return res
          .status(500)
          .send({ message: "Internal server error occurred" });
      }
      return res.status(200).send({ data });
    }
  );
  // if (!req.user) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {

  // }
};
