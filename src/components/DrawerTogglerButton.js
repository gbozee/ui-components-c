import React from "react";
import "./DrawerTogglerButton.css";

export const DrawerTogglerButton = ({ click }) => (
  <button className="toggle-button" onClick={click}>
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);
