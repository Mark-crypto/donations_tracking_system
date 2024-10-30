import connection from "../database.js";

export const storeDriver = (req, res) => {
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
        return res.status(201).send({ message: "Record stored successfully" });
      }
    );
  } catch (error) {
    return res.status(500).send({ error: "Internal server error occurred" });
  }
};

export const storeVehicle = (req, res) => {
  const {
    number_plate,
    model,
    brand,
    latitude,
    longitude,
    capacity_in_litres,
  } = req.body;
  try {
    connection.execute(
      `INSERT INTO vehicles SET number_plate=?,model=?,brand=?,latitude=?,longitude=?,capacity_in_litres=?`,
      [number_plate, model, brand, latitude, longitude, capacity_in_litres],
      (error) => {
        if (error) {
          return res
            .status(500)
            .send({ error: "Internal server error occurred" });
        }
        return res.status(201).send({ message: "Record stored successfully" });
      }
    );
  } catch (error) {
    return res.status(500).send({ error: "Internal server error occurred" });
  }
};

export const storeCounty = (req, res) => {
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
        return res.status(201).send({ message: "Record stored successfully" });
      }
    );
  } catch (error) {
    return res.status(500).send({ error: "Internal server error occurred" });
  }
};
