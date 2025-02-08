import React from "react";
import "../../styles/Nav.css";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <>
      <div className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4 style={{ color: "white" }}>
            TRACKING <span style={{ color: "#7cfc00" }}>AID</span>
          </h4>
        </Link>
        <h5>
          Logout{" "}
          <span style={{ color: "#7cfc00" }}>
            <LuLogOut />
          </span>
        </h5>
      </div>
    </>
  );
};

export default NavbarTop;
