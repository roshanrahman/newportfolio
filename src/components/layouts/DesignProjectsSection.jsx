import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./DesignProjectsSection.scss";
import IconButton from "../items/buttons/IconButton";
import { openLink } from "../../utils/browser";
import Spacer from "../items/Spacer";
import Button from "../items/buttons/Button";
import ProjectCard from "../items/ProjectCard";

class DesignProjectsSection extends Component {
  render() {
    return (
      <section className="projects-section">
        <div className="grid">
          <div className="grid-item title-card nomobile">
            <h1>
              <span className="design-gradient">Design</span> projects
            </h1>
            <p>You'll also find some stuff on my </p>
            <a href="https://dribbble.com" target="_blank">
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
          <div className="grid-item title-card nodesktop mobile-block">
            <h1>
              <span className="design-gradient">Design</span> projects
            </h1>
            <p>You'll also find some stuff on my </p>
            <a href="https://dribbble.com" target="_blank">
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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <div className="grid-item title-card nodesktop mobile-block">
            <div className="spacer" style={{ marginTop: "48px" }}></div>
            <p>You'll also find some stuff on my </p>
            <a href="https://dribbble.com" target="_blank">
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
