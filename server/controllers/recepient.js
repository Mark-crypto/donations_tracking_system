import connection from "../database";

//Fetch all recepients
export const getRecepients = (req, res) => {
  try {
    const query = "SELECT * from recepient ORDER BY id desc";
    connection.query(query, function (error, data) {
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
    const query = `SELECT * FROM recepient where id = "${id}"`;

    connection.query(query, (error, data) => {
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
    firstName,
    lastName,
    national_Id,
    orders,
    totalNo,
    familySize,
    region,
  } = req.body;
  try {
    connection.query(
      `INSERT INTO recepient SET firstName =?,lastName = ?,national_Id = ?,orders = ?,totalNo = ?,familySize = ?,region = ?`,
      [firstName, lastName, national_Id, orders, totalNo, familySize, region],
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
    firstName,
    lastName,
    national_Id,
    orders,
    totalNo,
    familySize,
    region,
  } = req.body;

  try {
    connection.query(
      "UPDATE recepient SET firstName = ?,lastName = ?,national_Id = ?,orders = ?, totalNo = ?, familySize = ?,region = ? WHERE id= ?",
      [
        firstName,
        lastName,
        national_Id,
        orders,
        totalNo,
        familySize,
        region,
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
    const query = `DELETE FROM recepient where id = "${id}"`;
    connection.query(query, (error) => {
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
