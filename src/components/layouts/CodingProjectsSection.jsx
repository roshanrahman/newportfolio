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
    if (this.props.projects.length < 1) {
      return "";
    }
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
          {this.props.projects.map((project) => {
            return (
              <ProjectCard
                image={project.smallImage}
                slug={project.slug}
                title={project.title}
                description={project.description}
                github={project.github}
                color={project.color}
              />
            );
          })}
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
