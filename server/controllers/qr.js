import connection from "../database.js";

export const getQR = (req, res) => {
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
  // if (!req.user) {
  //   return res.status(401).send({ error: "Unauthorized user" });
  // } else {

  // }
};
export const storeQR = (req, res) => {
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
  // if (!req.user) {
  //   return res.status(401).send({ error: "Unauthorized user" });
  // } else {

  // }
};
