import React from "react";
import "../../styles/Nav.css";
import { LuLogOut } from "react-icons/lu";

const NavbarTop = () => {
  return (
    <>
      <div className="nav">
        <h4>
          TRACKING <span style={{ color: "#7cfc00" }}>AID</span>
        </h4>
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
