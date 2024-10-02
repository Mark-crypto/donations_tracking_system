import React from "react";
import Table from "react-bootstrap/Table";
import NavbarTop from "./sub-components/Navbar";
import Button from "react-bootstrap/Button";
import "../styles/Tables.css";

const Recepients = () => {
  return (
    <>
      <NavbarTop />
      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>National ID </th>
            <th>Items Received</th>
            <th>Number Received</th>
            <th>Family Members</th>
            <th>Region</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>David</td>
            <td>001240</td>
            <td>Maize flour</td>
            <td>20bags</td>
            <td>5 members</td>
            <td>North Eastern</td>
            <td>
              <Button variant="success">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>David</td>
            <td>001240</td>
            <td>Maize flour</td>
            <td>20bags</td>
            <td>5 members</td>
            <td>North Eastern</td>
            <td>
              <Button variant="success">Edit</Button>{" "}
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>David</td>
            <td>001240</td>
            <td>Maize flour</td>
            <td>20bags</td>
            <td>5 members</td>
            <td>North Eastern</td>
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

export default Recepients;
