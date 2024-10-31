import connection from "../database.js";

export const getQR = (req, res) => {
  try {
    const query = "SELECT * from qrscan ORDER BY id desc";
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
};
export const storeQR = (req, res) => {
  const { item, unique_code } = req.body;
  try {
    connection.execute(
      `INSERT INTO qr_scans SET item =?,unique_code=?`,
      [item, unique_code],
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
};
