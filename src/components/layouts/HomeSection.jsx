import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./HomeSection.scss";
import IconButton from "../items/buttons/IconButton";
import { openLink } from "../../utils/browser";
import { AiOutlineArrowDown } from "react-icons/ai";

class HomeSection extends Component {
  render() {
    return (
      <section className="home-section">
        <div className="hero">
          <div className="hero-text">
            <h1 className="nomobile">
              Hi! <br />
              I'm <span className="about-me-gradient">Roshan</span>
            </h1>
            <h1
              className="nodesktop mobile-block"
              style={{ textAlign: "center" }}
            >
              Hi! I am <span className="about-me-gradient">Roshan</span>
            </h1>
            <div className="social-buttons">
              <IconButton
                onPressed={() => {
                  openLink("https://twitter.com/roshan6399");
                }}
                size="30px"
                icon={"twitter-fill"}
                color="#44f3fc"
              ></IconButton>
              <IconButton
                onPressed={() => {
                  openLink("https://github.com/roshanrahman");
                }}
                size="30px"
                icon={"github-fill"}
                color="#44f3fc"
              ></IconButton>
              <IconButton
                onPressed={() => {
                  openLink("mailto:roshanrahman6399@gmail.com");
                }}
                size="30px"
                icon={"email-outlined"}
                color="#44f3fc"
              ></IconButton>
            </div>
          </div>
          {/* <hr /> */}
          <p style={{ textAlign: "center" }}>
            A coder turned designer who wants to build heart-winning products.
          </p>
          <p> I dual-wield VS Code and Figma.</p>
          <AiOutlineArrowDown
            onClick={() => {
              this.props.onNavIntent("design");
            }}
            style={{ cursor: "pointer" }}
            className="arrow"
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;
