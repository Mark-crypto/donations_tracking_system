import React from "react";
import "../../styles/Nav.css";
import { LuLogOut } from "react-icons/lu";

const NavbarTop = () => {
  return (
    <>
      <div className="nav">
        Tracking Aid
        <LuLogOut />
      </div>
    </>
  );
};

export default NavbarTop;
