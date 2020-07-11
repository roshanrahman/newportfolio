import React, { Component, useState } from "react";
import "./AppBar.scss";
import { toggleDarkTheme, isDarkTheme } from "../../utils/context";
import Button from "./buttons/Button";
import DarkModeToggle from "./DarkModeToggle";

function AppBar(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <header className="app-bar">
        <div className="left">
          <DarkModeToggle className="dark-toggle" />
        </div>
        <div className="right">
          <button
            onClick={() => {
              props.onNavIntent("home");
            }}
            className="link-item"
          >
            Home
          </button>
          <button
            onClick={() => {
              props.onNavIntent("design");
            }}
            className="link-item"
          >
            Projects
          </button>
          <button
            onClick={() => {
              props.onNavIntent("aboutMe");
            }}
            className="link-item"
          >
            About me
          </button>
          <Button
            onClicked={() => {
              props.onNavIntent("contact");
            }}
            otherClasses="shadow-secondary"
            color="var(--secondary-color)"
            rounded
          >
            CONTACT
          </Button>
        </div>
      </header>
      <header className="app-bar-mobile">
        <div className="left">
          <DarkModeToggle className="dark-toggle" />
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
          <Button
            onClicked={() => {
              props.onNavIntent("contact");
            }}
            otherClasses="shadow-secondary"
            color="var(--secondary-color)"
            rounded
          >
            CONTACT ME
          </Button>
        </div>
      </header>
    </div>
  );
}

export default AppBar;
