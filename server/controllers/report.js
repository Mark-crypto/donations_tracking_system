import connection from "../database.js";

export const getDonations = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
    connection.execute(`SELECT COUNT(*) FROM donations`, (error, data) => {
      if (error)
        return res.status(500).send({ message: "Internal server error" });
      return res.status(200).send({ data });
    });
  }
};

export const getRecipients = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
    connection.execute(`SELECT COUNT(*) FROM recepients`, (error, data) => {
      if (error)
        return res.status(500).send({ message: "Internal server error" });
      return res.status(200).send({ data });
    });
  }
};

export const getCounties = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
    connection.execute(`SELECT COUNT(*) FROM county`, (error, data) => {
      if (error)
        return res.status(500).send({ message: "Internal server error" });
      return res.status(200).send({ data });
    });
  }
};

export const getBarGraph = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
    connection.execute(
      `SELECT quantity,destination FROM donations`,
      (error, data) => {
        if (error)
          return res.status(500).send({ message: "Internal server error" });
        return res.status(200).send({ data });
      }
    );
  }
};

export const getPieChart = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
    connection.execute(
      `SELECT quantity,item_received FROM recepients`,
      (error, data) => {
        if (error)
          return res.status(500).send({ message: "Internal server error" });
        return res.status(200).send({ data });
      }
    );
  }
};
export const getCurveGraph = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
    connection.execute(
      `SELECT quantity,region FROM recepients`,
      (error, data) => {
        if (error)
          return res.status(500).send({ message: "Internal server error" });
        return res.status(200).send({ data });
      }
    );
  }
};
export const getLineGraph = (req, res) => {};
