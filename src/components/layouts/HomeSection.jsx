import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./HomeSection.scss";
import IconButton from "../items/buttons/IconButton";
import { openLink } from "../../utils/browser";

class HomeSection extends Component {
  render() {
    return (
      <section className="home-section">
        <div className="hero">
          <div className="hero-text">
            <h1>
              Hi! <br />
              I'm <span className="primary-gradient">Roshan</span>
            </h1>
            <div className="social-buttons">
              <IconButton
                onPressed={() => {
                  openLink("https://twitter.com/roshan6399");
                }}
                size="30px"
                icon={"twitter-fill"}
                color="var(--primary-color)"
              ></IconButton>
              <IconButton
                onPressed={() => {
                  openLink("https://github.com/roshanrahman");
                }}
                size="30px"
                icon={"github-fill"}
                color="var(--primary-color)"
              ></IconButton>
              <IconButton
                onPressed={() => {
                  openLink("mailto:roshanrahman6399@gmail.com");
                }}
                size="30px"
                icon={"email-outlined"}
                color="var(--primary-color)"
              ></IconButton>
            </div>
          </div>
          {/* <hr /> */}
          <p style={{ textAlign: "center" }}>
            A coder turned designer who wants to build heart-winning products.
          </p>
          <p> I dual-wield VS Code and Figma.</p>
        </div>
      </section>
    );
  }
}

export default HomeSection;