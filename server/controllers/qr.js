import connection from "../database.js";

export const getQR = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized user" });
  } else {
    try {
      const query = "SELECT * from qrscan ORDER BY qr_ID desc";
      connection.execute(query, function (error, data) {
        if (error)
          return res
            .status(500)
            .send({ error: "Internal server error has occurred" });
        return res.status(200).send({ data });
      });
    } catch (error) {
      return res
        .status(500)
        .send({ error: "Internal server error has occurred" });
    }
  }
};
export const storeQR = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized user" });
  } else {
    const { qrData } = req.body;
    try {
      connection.execute(
        `INSERT INTO qrscan SET item =?,unique_code=?`,
        [qrData.item, qrData.unique_code],
        (error) => {
          if (error) {
            return res
              .status(500)
              .send({ error: "Internal server error occurred" });
          }
          return res
            .status(201)
            .send({ message: "Record inserted successfully" });
        }
      );
    } catch (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
  }
};
