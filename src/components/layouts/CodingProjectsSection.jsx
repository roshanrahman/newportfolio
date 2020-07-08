import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./CodingProjectsSection.scss";
import IconButton from "../items/buttons/IconButton";
import { openLink } from "../../utils/browser";
import Spacer from "../items/Spacer";
import Button from "../items/buttons/Button";
import ProjectCard from "../items/ProjectCard";

class CodingProjectsSection extends Component {
  render() {
    return (
      <section className="projects-section">
        <div className="grid">
          <div className="grid-item title-card nomobile">
            <h1>
              <span className="coding-gradient">Coding</span> projects
            </h1>
            <p>You'll also find some stuff on my </p>
            <a href="https://github.com" target="_blank">
              <Button
                textSize="1.286rem"
                otherClasses="shadow-github"
                color="var(--github-color)"
                rounded
                icon="github-outlined"
                shadowColor="var(--github-color)"
              >
                GitHub Profile
              </Button>
            </a>
          </div>
          <div className="nodesktop mobile-block mobile-title-card">
            <h1>
              <span className="coding-gradient">Coding</span> projects
            </h1>
          </div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <div className="grid-item title-card nodesktop mobile-block">
            <div className="spacer" style={{ marginTop: "48px" }}></div>

            <p>You'll also find some stuff on my </p>
            <a href="https://github.com" target="_blank">
              <Button
                textSize="1.286rem"
                otherClasses="shadow-github"
                color="var(--github-color)"
                rounded
                icon="github-outlined"
                shadowColor="var(--github-color)"
              >
                GitHub Profile
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default CodingProjectsSection;