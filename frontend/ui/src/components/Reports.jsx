import Navbar from "./sub-components/Navbar";
import Footer from "./sub-components/Footer";
import "../styles/Reports.css";
import { Pie } from "../graphs/Pie";
import { Line } from "../graphs/Line";
import { Bar } from "../graphs/Bar";
import { Curve } from "../graphs/Curve";
import { useEffect, useState } from "react";
import axios from "axios";

const Reports = () => {
  const [donations, setDonations] = useState(0);
  const [recipients, setRecipients] = useState(0);
  const [counties, setCounties] = useState(0);

  // Fetching number of donations
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/report/donations"
      );

      setDonations(response.data.data[0]["COUNT(*)"]);
    };
    fetchData();
  }, []);

  // Fetching number of recipients
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/report/recipients"
      );

      setRecipients(response.data.data[0]["COUNT(*)"]);
    };
    fetchData();
  }, []);

  // Fetching number of counties
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/report/counties"
      );
      setCounties(response.data.data[0]["COUNT(*)"]);
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />

      {/* Cards with number of donations, recipients and counties */}
      <div className="report-top">
        <button>
          Number of donations issued:{" "}
          <div className="report-numbers">{donations}</div>
        </button>
        <button>
          Number of recepients:{" "}
          <div className="report-numbers">{recipients}</div>{" "}
        </button>
        <button>
          Number of counties supplied:{" "}
          <div className="report-numbers">{counties}</div>{" "}
        </button>
      </div>

      {/* Graphs */}
      <div className="report-middle">
        <Line />
        <Bar />
      </div>
      <div className="report-bottom">
        <Curve />
        <Pie />
      </div>
    </>
  );
};

export default Reports;
