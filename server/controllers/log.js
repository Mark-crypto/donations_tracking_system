import connection from "../database.js";

export const getDonationLogs = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
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
  }
};

export const getRecipientLogs = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
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
  }
};
