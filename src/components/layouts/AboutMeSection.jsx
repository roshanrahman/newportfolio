import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./AboutMeSection.scss";
import IconButton from "../items/buttons/IconButton";
import { openLink } from "../../utils/browser";
import Spacer from "../items/Spacer";
import Button from "../items/buttons/Button";
import ProjectCard from "../items/ProjectCard";
import WrittenCard from "../items/WrittenCard";

class AboutMeSection extends Component {
  render() {
    return (
      <section className="projects-section">
        <div className="written-section">
          <h1>
            About <span className="about-me-gradient">Me</span>
          </h1>
        </div>
        <div className="content">
          <div
            className="col"
            style={{ fontWeight: "bold", lineHeight: "140%" }}
          >
            <p>
              Microsoft PowerPoint was my playground growing up. I used it to
              make quiz games and animations. My interest in creating
              interactive elements started from there.
            </p>{" "}
            <p>
              I learnt to understand and appreciate good user interfaces, and
              found the experience of making them challenging and satisfying.
            </p>{" "}
            <p>
              Aside from design, I have developed projects in Flutter, React,
              Django, Node and Golang.
            </p>
          </div>
          <div className="col medium-text" style={{ lineHeight: "150%" }}>
            <p>
              I am obsessed with storytelling, and I devour movies, videogames
              and books that have a compelling story to tell.{" "}
            </p>
            <p>
              I love to explore new ways to learn and be more capable everyday.
            </p>
            <p>
              I try to live by the simple virtues of honesty, empathy, and
              appreciation for the good things in the world.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMeSection;
