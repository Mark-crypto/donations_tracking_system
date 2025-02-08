import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import NavbarTop from "./sub-components/Navbar";
// import Button from "react-bootstrap/Button";
import "../styles/Tables.css";
import axios from "axios";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [values, setValues] = useState([]);

  //Fetching donations logs
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/logs/donations");
      setLogs(response.data.data);
    };
    fetchData();
  }, []);

  //Fetching recipients logs
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/logs/recipients");
      setValues(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavbarTop />
      <h4 style={{ marginTop: "20px", textAlign: "center" }}>
        Donations <span style={{ color: "#7cfc00" }}>Table</span>
      </h4>
      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Operation Type</th>
            <th>Operation Time</th>
            <th>Old Data</th>
            <th>New Data</th>
            <th>Donation ID</th>
          </tr>
        </thead>
        <tbody>
          {logs.length !== 0 ? (
            logs.map((log, index) => (
              <tr key={log.id}>
                <td>{index + 1}</td>
                <td>{log.operation_type}</td>
                <td>{log.operation_time}</td>
                <td>{log.old_data}</td>
                <td>{log.new_data}</td>
                <td>{log.item_ID}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                <h5>No Data Available</h5>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <h4 style={{ marginTop: "20px", textAlign: "center" }}>
        Recipients <span style={{ color: "#7cfc00" }}>Table</span>
      </h4>
      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Operation Type</th>
            <th>Operation Time</th>
            <th>Old Data</th>
            <th>New Data</th>
            <th>Recipient ID</th>
          </tr>
        </thead>
        <tbody>
          {values.length !== 0 ? (
            values.map((value, index) => (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.operation_type}</td>
                <td>{value.operation_timestamp}</td>
                <td>{value.old_data}</td>
                <td>{value.new_data}</td>
                <td>{value.recepient_ID}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                <h5>No Data Available</h5>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Logs;
