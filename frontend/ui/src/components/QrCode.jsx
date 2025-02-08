import NavbarTop from "./sub-components/Navbar";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const QrCode = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const [qrData, setQrData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/api/qrscan");
      setQrCodes(response.data.data);
    };
    fetchData();
  }, []);

  // Initialize QR scanner when component mounts
  useEffect(() => {
    const onScanSuccess = (decodeText) => {
      console.log("QR Code Scanned:", decodeText);
      try {
        const parsedData = JSON.parse(decodeText); // Convert scanned text to JSON
        setQrData(parsedData); // Set parsed data to state
      } catch (error) {
        console.error("Error parsing QR data to JSON:", error);
        toast.error("Invalid QR Code data format.");
      }
    };

    const htmlscanner = new Html5QrcodeScanner("my-qr-reader", {
      fps: 10,
      qrbox: 250,
    });
    htmlscanner.render(onScanSuccess);

    // Clean up function to stop scanner when component unmounts
    return () => {
      htmlscanner.clear();
    };
  }, []);

  // Trigger API call when qrData updates
  useEffect(() => {
    if (qrData) {
      const sendDataToServer = async () => {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/qrscan",
            {
              qrData,
            }
          );
          toast.success(response.data.message);
          setQrCodes((prevCodes) => [...prevCodes, qrData]); // Optionally update list immediately
        } catch (error) {
          console.error("Error sending QR data to server:", error);
          toast.error("Failed to send data to server.");
        }
      };
      sendDataToServer();
    }
  }, [qrData]); // Run only when qrData changes

  return (
    <>
      <NavbarTop />
      <ToastContainer />
      <div className="qrcode">
        <div className="container">
          <h1>Scan QR Codes</h1>
          <div className="section">
            <div id="my-qr-reader"></div>
          </div>
        </div>
      </div>

      {/* QR Code Table */}
      <Table striped hover variant="dark" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Date </th>
            <th>Unique Code </th>
          </tr>
        </thead>
        <tbody>
          {qrCodes.length !== 0 ? (
            qrCodes.map((qrCode, index) => {
              const { qr_ID: id, item, date, unique_code } = qrCode;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                  <td>{date}</td>
                  <td>{unique_code}</td>
                </tr>
              );
            })
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

export default QrCode;
