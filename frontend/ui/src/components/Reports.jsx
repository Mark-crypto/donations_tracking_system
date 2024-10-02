import Navbar from "./sub-components/Navbar";
import Footer from "./sub-components/Footer";
import "../styles/Reports.css";
import { Pie } from "../graphs/Pie";
import { Line } from "../graphs/Line";
import { Bar } from "../graphs/Bar";
import { Curve } from "../graphs/Curve";

const Reports = () => {
  return (
    <>
      <Navbar />
      <div className="report-top">
        <button>
          Number of donations issued: <div className="report-numbers">1000</div>
        </button>
        <button>
          Number of recepients: <div className="report-numbers">870</div>{" "}
        </button>
        <button>
          Number of counties supplied: <div className="report-numbers">7</div>{" "}
        </button>
      </div>
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
