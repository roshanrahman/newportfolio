import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./WrittenProjectsSection.scss";
import IconButton from "../items/buttons/IconButton";
import { openLink } from "../../utils/browser";
import Spacer from "../items/Spacer";
import Button from "../items/buttons/Button";
import ProjectCard from "../items/ProjectCard";
import WrittenCard from "../items/WrittenCard";

class WrittenProjectsSection extends Component {
  render() {
    return (
      <section className="projects-section">
        <div className="written-section">
          <h1>
            <span className="written-gradient">Articles</span> Written
          </h1>
          <WrittenCard
            title="Python helped me get Avengers' Endgame tickets"
            publisher="medium.com"
            link="https://google.com"
            img="https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <WrittenCard
            title="Fonts are fascinating"
            publisher="uxdesign.cc"
            link="https://google.com"
            img="https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </section>
    );
  }
}

export default WrittenProjectsSection;
