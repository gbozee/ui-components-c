import React from "react";
import "./Navbar.css";
import { DrawerTogglerButton } from "./DrawerTogglerButton";
import { Link } from "react-router-dom";

export const Navbar = ({ drawerClickHandler }) => (
  <header className="bar">
    <nav className="navbar_items">
      <div className="toolbar_toggle-button">
        {" "}
        <DrawerTogglerButton click={drawerClickHandler} />
      </div>
      <div className="navbar_logo">
        <a href="/">BITCAL</a>
      </div>
      <div className="spacer"> </div>
      <div className="link_items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/actionpage">Actionpage</Link>
          </li>
          <li>
            <Link to="/market">Market</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
