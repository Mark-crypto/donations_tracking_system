import connection from "../database.js";

export const getDonations = (req, res) => {
  connection.execute(`SELECT COUNT(*) FROM donations`, (error, data) => {
    if (error)
      return res.status(500).send({ message: "Internal server error" });
    return res.status(200).send({ data });
  });
  // if (!req.user) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {

  // }
};

export const getRecipients = (req, res) => {
  connection.execute(`SELECT COUNT(*) FROM recepients`, (error, data) => {
    if (error)
      return res.status(500).send({ message: "Internal server error" });
    return res.status(200).send({ data });
  });
  // if (!req.user) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {

  // }
};

export const getCounties = (req, res) => {
  connection.execute(`SELECT COUNT(*) FROM county`, (error, data) => {
    if (error)
      return res.status(500).send({ message: "Internal server error" });
    return res.status(200).send({ data });
  });
  // if (!req.user) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {

  // }
};

export const getBarGraph = (req, res) => {
  connection.execute(
    `SELECT quantity,destination FROM donations`,
    (error, data) => {
      if (error)
        return res.status(500).send({ message: "Internal server error" });
      return res.status(200).send({ data });
    }
  );
  // if (!req.user) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {

  // }
};

export const getPieChart = (req, res) => {
  connection.execute(
    `SELECT quantity,item_received FROM recepients`,
    (error, data) => {
      if (error)
        return res.status(500).send({ message: "Internal server error" });
      return res.status(200).send({ data });
    }
  );
  // if (!req.user) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {

  // }
};
export const getCurveGraph = (req, res) => {
  connection.execute(
    `SELECT quantity,region FROM recepients`,
    (error, data) => {
      if (error)
        return res.status(500).send({ message: "Internal server error" });
      return res.status(200).send({ data });
    }
  );
  // if (!req.user) {
  //   return res.status(401).send({ message: "Unauthorized" });
  // } else {

  // }
};
export const getLineGraph = (req, res) => {};
