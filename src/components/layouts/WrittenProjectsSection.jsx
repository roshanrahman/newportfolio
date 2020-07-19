import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import WrittenCard from "../items/WrittenCard";
import "./WrittenProjectsSection.scss";

class WrittenProjectsSection extends Component {
  render() {
    if (this.props.projects.length < 1) {
      return "";
    }
    return (
      <section className="projects-section">
        <div className="written-section">
          <h1>
            <span className="written-gradient">Articles</span> Written
          </h1>
          {this.props.projects.map((project) => {
            return (
              <WrittenCard
                title={`${project.title}`}
                publisher={`${project.description}`}
                link={`${project.articleUrl}`}
                img={`${project.smallImage}`}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default WrittenProjectsSection;
