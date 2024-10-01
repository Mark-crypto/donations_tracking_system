import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../styles/Home.css";
import { FcDonate } from "react-icons/fc";
import { GrSecure } from "react-icons/gr";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Breadcrumb>
        <Breadcrumb.Item active style={{ color: "white" }}>
          Admin Dashboard
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="menu">
        <div className="menu-1">
          <a href="/donations">
            <button>
              <FcDonate /> Donations
            </button>
          </a>
          <a href="/logs">
            <button>
              <GrSecure /> Logs
            </button>
          </a>
          <a href="/map">
            <button>
              <FaMapMarkedAlt /> Map
            </button>
          </a>
        </div>
        <div className="menu-2">
          <a href="/QrCode">
            <button>
              <MdQrCodeScanner /> QrCode
            </button>
          </a>
          <a href="/reports">
            <button>
              <TbReportAnalytics /> Reports
            </button>
          </a>
          <a href="/recepients">
            <button>
              <GiReceiveMoney /> Recepients
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
