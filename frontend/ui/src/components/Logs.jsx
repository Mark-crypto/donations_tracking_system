import React from "react";
import Table from "react-bootstrap/Table";
import NavbarTop from "./sub-components/Navbar";
import Button from "react-bootstrap/Button";
import "../styles/Tables.css";

const Logs = () => {
  return (
    <>
      <NavbarTop />

      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Action</th>
            <th>Timestamp</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Deleted userID 2</td>
            <td>2024-05-25, 16:13:43</td>
            <td>Njoroge</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Deleted userID 2</td>
            <td>2024-05-25, 16:13:43</td>
            <td>Njoroge</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Deleted userID 2</td>
            <td>2024-05-25, 16:13:43</td>
            <td>Njoroge</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Logs;
