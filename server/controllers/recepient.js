import connection from "../database.js";

//Fetch all recepients
export const getRecepients = (req, res) => {
  try {
    const query = "SELECT * from recepients ORDER BY recepient_ID desc";
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

//Fetch single recepient
export const getSingleRecepient = (req, res) => {
  const { id } = req.params;
  try {
    const query = `SELECT * FROM recepients where recepient_ID = "${id}"`;

    connection.execute(query, (error, data) => {
      if (error)
        return res
          .status(500)
          .send({ error: "Internal server error has occurred" });
      return res.status(200).send({ data: data[0] });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Internal server error has occurred" });
  }
};

//Store recepient
export const storeRecepients = (req, res) => {
  const {
    fName,
    lName,
    quantity,
    familyType,
    item_received,
    region,
    issued_by,
  } = req.body;
  try {
    connection.execute(
      `INSERT INTO recepients SET fName =?,lName = ?,quantity = ?,familyType = ?,item_received = ?,region = ?,issued_by = ?`,
      [fName, lName, quantity, familyType, item_received, region, issued_by],
      (error) => {
        if (error)
          return res
            .status(500)
            .send({ error: "Internal server error has occurred" });
        return res.status(201).send({ message: "Record stored successfully" });
      }
    );
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Internal server error has occurred" });
  }
};

//Update recepient
export const updateRecepients = (req, res) => {
  const {
    id,
    fName,
    lName,
    quantity,
    familyType,
    item_received,
    region,
    issued_by,
  } = req.body;

  try {
    connection.execute(
      "UPDATE recepients SET fName =?,lName = ?,quantity = ?,familyType = ?,item_received = ?,region = ?,issued_by = ? WHERE recepient_ID= ?",
      [
        fName,
        lName,
        quantity,
        familyType,
        item_received,
        region,
        issued_by,
        id,
      ],
      (error) => {
        if (error)
          return res
            .status(500)
            .send({ error: "Internal server error has occurred" });
        return res.status(201).send({ message: "Record updated successfully" });
      }
    );
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Internal server error has occurred" });
  }
};

//Delete recepient
export const deleteRecepients = (req, res) => {
  const { id } = req.params;
  try {
    const query = `DELETE FROM recepients where recepient_ID = "${id}"`;
    connection.execute(query, (error) => {
      if (error)
        return res
          .status(500)
          .send({ error: "Internal server error has occurred" });
      return res.status(201).send({ message: "Record deleted successfully" });
    });
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Internal server error has occurred" });
  }
};
