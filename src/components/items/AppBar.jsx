import React from "react";
import "./AppBar.scss";
import Button from "./buttons/Button";
import DarkModeToggle from "./DarkModeToggle";

function AppBar(props) {
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
