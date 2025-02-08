import connection from "../database.js";

export const getDriver = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized" });
  } else {
    try {
      const query = "SELECT * from drivers ORDER BY driver_ID desc";
      connection.execute(query, function (error, data) {
        if (error) {
          return res
            .status(500)
            .send({ error: "Internal server error has occurred" });
        }
        return res.status(200).send({ data });
      });
    } catch (error) {
      return res
        .status(500)
        .send({ error: "Internal server error has occurred" });
    }
  }
};

export const storeDriver = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized" });
  } else {
    const {
      fname,
      lname,
      id_number,
      phone,
      age,
      vehicle_model,
      route,
      year_employed,
    } = req.body;
    try {
      connection.execute(
        `INSERT INTO drivers SET fname=?,lname=?,id_number=?,phone=?,age=?,vehicle_model=?,route=?,year_employed=?`,
        [
          fname,
          lname,
          id_number,
          phone,
          age,
          vehicle_model,
          route,
          year_employed,
        ],
        (error) => {
          if (error) {
            return res
              .status(500)
              .send({ error: "Internal server error occurred" });
          }
          return res
            .status(201)
            .send({ message: "Record stored successfully" });
        }
      );
    } catch (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
  }
};

export const getVehicle = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized" });
  } else {
    try {
      const query = "SELECT * from vehicles ORDER BY vehicle_ID desc";
      connection.execute(query, function (error, data) {
        if (error) {
          return res
            .status(500)
            .send({ error: "Internal server error has occurred" });
        }
        return res.status(200).send({ data });
      });
    } catch (error) {
      return res
        .status(500)
        .send({ error: "Internal server error has occurred" });
    }
  }
};

export const getCounty = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized" });
  } else {
    try {
      const query = "SELECT * from county ORDER BY county_ID desc";
      connection.execute(query, function (error, data) {
        if (error) {
          return res
            .status(500)
            .send({ error: "Internal server error has occurred" });
        }
        return res.status(200).send({ data });
      });
    } catch (error) {
      return res
        .status(500)
        .send({ error: "Internal server error has occurred" });
    }
  }
};

export const storeVehicle = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized" });
  } else {
    const { plate_no, model, year, capacity, driver_ID } = req.body;
    try {
      connection.execute(
        `INSERT INTO vehicles SET plate_no=?, model=?, year=?, capacity=?, driver_ID=?`,
        [plate_no, model, year, capacity, driver_ID],
        (error) => {
          if (error) {
            return res
              .status(500)
              .send({ error: "Internal server error occurred" });
          }
          return res
            .status(201)
            .send({ message: "Record stored successfully" });
        }
      );
    } catch (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
  }
};

export const storeCounty = (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "Unauthorized" });
  } else {
    const { name, county_no, date_received, quantity, person_incharge } =
      req.body;
    try {
      connection.execute(
        `INSERT INTO county SET name=?, county_no=?, date_received=?, quantity=?, person_incharge=?`,
        [name, county_no, date_received, quantity, person_incharge],
        (error) => {
          if (error) {
            return res
              .status(500)
              .send({ error: "Internal server error occurred" });
          }
          return res
            .status(201)
            .send({ message: "Record stored successfully" });
        }
      );
    } catch (error) {
      return res.status(500).send({ error: "Internal server error occurred" });
    }
  }
};
