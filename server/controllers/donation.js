import connection from "../database.js";

//Fetching all records
export const getDonations = async (req, res) => {
  connection.execute("SELECT * FROM donations", (error, data) => {
    if (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
    return res.status(200).send({ data: data });
  });
  // if (!req.user) {
  //   return res.status(401).send({ error: "Unauthorized user" });
  // } else {

  // }
};
//Storing records to database
export const storeDonations = (req, res) => {
  const { item, quantity, destination, driver } = req.body;
  try {
    connection.execute(
      "INSERT INTO donations SET item =?,quantity=?,destination=?,driver=?",
      [item, quantity, destination, driver],
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
// Fetching single record
export const getSingleDonation = (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM donations where item_ID = "${id}"`;
  connection.execute(query, (error, data) => {
    if (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
    return res.status(200).send({ data: data[0] });
  });
  // if (!req.user) {
  //   return res.status(401).send({ error: "Unauthorized user" });
  // } else {

  // }
};
//Updating records
export const updateDonations = (req, res) => {
  const { id } = req.params;
  const { item, quantity, destination, driver } = req.body;
  const query = `UPDATE donations SET item = "${item}", quantity = "${quantity}", destination = "${destination}", driver = "${driver}" WHERE item_ID = "${id}"`;

  connection.execute(query, (error) => {
    if (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
    return res.status(200).send({ message: "Record updated successfully" });
  });
  // if (!req.user) {
  //   return res.status(401).send({ error: "Unauthorized user" });
  // } else {

  // }
};
//Deleting records
export const deleteDonations = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM donations WHERE item_ID = "${id}"`;

  connection.execute(query, (error) => {
    if (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
    return res.status(200).send({ message: "Record deleted successfully" });
  });
  // if (!req.user) {
  //   return res.status(401).send({ error: "Unauthorized user" });
  // } else {

  // }
};

// SELECT user, Host FROM mysql. user
//SELECT user(); current logged user
//user() , db(), host(), command()
//DROP TRIGGER [IF EXISTS] [schema_name.]trigger1, trigger2, ... ];
//SELECT user, host, db, command FROM information_schema.processlist;
/*
  DELIMITER //
  CREATE TRIGGER insert_current_system_user
  AFTER INSERT ON donations
  FOR EACH ROW
  BEGIN
   UPDATE donations SET admin_incharge = USER() WHERE id = NEW.id;
  END;
  //
  DELIMITER ;

  CREATE TRIGGER set_default_user
BEFORE INSERT ON your_table_name
FOR EACH ROW
BEGIN
    IF NEW.your_column_name IS NULL THEN
        SET NEW.your_column_name = USER();
    END IF;
END;

  */
