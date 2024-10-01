import "../styles/Home.css";
import { FaDonate } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <h4 className="menu-title">
        Administrator <span style={{ color: "#7cfc00" }}>Menu</span>
      </h4>
      <div className="menu">
        <div className="menu-1">
          <a href="/donations">
            <button>
              <div className="menu-icon">
                <FaDonate />
              </div>
              Donations
            </button>
          </a>
          <a href="/logs">
            <button>
              <div className="menu-icon">
                <GrSecure />
              </div>
              Logs
            </button>
          </a>
          <a href="/map">
            <button>
              <div className="menu-icon">
                <FaMapMarkedAlt />
              </div>
              Map
            </button>
          </a>
        </div>
        <div className="menu-2">
          <a href="/QrCode">
            <button>
              <div className="menu-icon">
                <MdQrCodeScanner />
              </div>
              QrCode
            </button>
          </a>
          <a href="/reports">
            <button>
              <div className="menu-icon">
                <TbReportAnalytics />
              </div>
              Reports
            </button>
          </a>
          <a href="/recepients">
            <button>
              <div className="menu-icon">
                <GiReceiveMoney />
              </div>
              Recepients
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
