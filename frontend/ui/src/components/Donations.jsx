import React from "react";
import Table from "react-bootstrap/Table";
import NavbarTop from "./sub-components/Navbar";
import Button from "react-bootstrap/Button";
import "../styles/Tables.css";

const Donations = () => {
  return (
    <>
      <NavbarTop />

      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Total Number(bags)</th>
            <th>Dispatch</th>
            <th>Destination</th>
            <th>Month</th>
            <th>Region</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Maize flour</td>
            <td>100</td>
            <td>UNICEF Nairobi</td>
            <td>Turkana</td>
            <td>September</td>
            <td>Northern Kenya</td>
            <td>
              <Button variant="success">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Maize flour</td>
            <td>100</td>
            <td>UNICEF Nairobi</td>
            <td>Turkana</td>
            <td>September</td>
            <td>Northern Kenya</td>
            <td>
              <Button variant="success">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Maize flour</td>
            <td>100</td>
            <td>UNICEF Nairobi</td>
            <td>Turkana</td>
            <td>September</td>
            <td>Northern Kenya</td>
            <td>
              <Button variant="success">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Donations;
