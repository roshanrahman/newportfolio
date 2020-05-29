import React, { Component } from "react";
import "./AppBar.scss";
import { toggleDarkTheme, isDarkTheme } from "../../utils/context";
import Button from "./buttons/Button";

function AppBar() {
  return (
    <header className="app-bar">
      <div className="left">
        <Button outlined rounded icon={"bulb-fill"} onPressed={toggleDarkTheme}>
          Toggle Dark Mode
        </Button>
      </div>
      <div className="right">
        <a href="" className="link-item">
          Portfolio
        </a>
        <a href="" className="link-item">
          Skills
        </a>
        <a href="" className="link-item">
          About me
        </a>
        <a href="" className="link-item">
          Contact
        </a>
        <Button rounded gradient="primary">
          EMAIL ME
        </Button>
      </div>
    </header>
  );
}

export default AppBar;
