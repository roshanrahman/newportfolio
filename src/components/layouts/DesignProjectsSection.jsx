import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./DesignProjectsSection.scss";
import Button from "../items/buttons/Button";
import ProjectCard from "../items/ProjectCard";

class DesignProjectsSection extends Component {
  render() {
    if (this.props.projects.length < 1) {
      return "";
    }
    return (
      <section className="projects-section">
        <div className="grid">
          <div className="grid-item title-card nomobile">
            <h1>
              <span className="design-gradient">Design</span> projects
            </h1>
            <p>You'll also find some stuff on my </p>
            <a
              href="https://dribbble.com/roshan6399"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                textSize="1.286rem"
                otherClasses="shadow-dribbble"
                color="var(--dribbble-color)"
                rounded
                icon="dribbble-outlined"
                shadowColor="var(--dribbble-color)"
              >
                Dribbble Profile
              </Button>
            </a>
          </div>
          <div className="nodesktop mobile-block mobile-title-card">
            <h1>
              <span className="design-gradient">Design</span> projects
            </h1>
          </div>
          {this.props.projects.map((project) => {
            return (
              <ProjectCard
                image={project.smallImage}
                slug={project.slug}
                title={project.title}
                description={project.shortDescription}
                github={project.github}
              />
            );
          })}
          <div className="grid-item title-card nodesktop mobile-block">
            <div className="spacer" style={{ marginTop: "48px" }}></div>
            <p>You'll also find some stuff on my </p>
            <a
              href="https://dribbble.com/roshan6399"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                textSize="1.286rem"
                otherClasses="shadow-dribbble"
                color="var(--dribbble-color)"
                rounded
                icon="dribbble-outlined"
                shadowColor="var(--dribbble-color)"
              >
                Dribbble Profile
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default DesignProjectsSection;
