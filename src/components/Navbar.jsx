import React, { useContext } from "react";

import NavbarStyle from "../styles/Navbar.module.css";
import User from "./User";
const Navbar = function () {
  return (
    <header className={`${NavbarStyle.header}`}>
      <figure className={`${NavbarStyle.brand}`}>
        <img src="/logo.png" alt="" />
      </figure>
      <User />
    </header>
  );
};

export default Navbar;
