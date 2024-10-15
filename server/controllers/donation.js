import connection from "../database";

//Fetching all records
export const getDonations = async (req, res) => {
  const query = "SELECT * from orders ORDER BY id desc";
  try {
    connection.query(query, function (error, data) {
      if (error)
        return res
          .status(500)
          .send({ error: "Internal server error occurred" });
      return res.status(200).send({ data });
    });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error occurred" });
  }
};
//Storing records to database
export const storeDonations = (req, res) => {
  const { name, totalNumber, dispatch, destination, month, region } = req.body;

  try {
    connection.query(
      "INSERT INTO orders SET name =?,totalNumber=?,dispatch=?,destination=?,month=?,region=?",
      [name, totalNumber, dispatch, destination, month, region],
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
// Fetching single record
export const getSingleDonation = (req, res) => {
  const id = req.params;
  const query = `SELECT * FROM orders where id = "${id}"`;
  connection.query(query, (error, data) => {
    if (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
    return res.status(200).send({ data: data[0] });
  });
};
//Updating records
export const updateDonations = (req, res) => {
  const { id, name, totalNumber, dispatch, destination, month, region } =
    req.body;

  connection.query(
    "UPDATE orders SET name =?,totalNumber=?,dispatch=?,destination=?,month=?,region=? WHERE id =?",
    [name, totalNumber, dispatch, destination, month, region, id],
    (error) => {
      if (error) {
        return res
          .status(500)
          .send({ error: "Internal server error occurred" });
      }
      return res.status(200).send({ message: "Record updated successfully" });
    }
  );
};
//Deleting records
export const deleteDonations = (req, res) => {
  const { id } = req.body;
  const query = `DELETE FROM orders where id = "${id}"`;

  connection.query(query, (error) => {
    if (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
    return res.status(200).send({ message: "Record deleted successfully" });
  });
};
