import React from "react";
import "./ProjectCard.scss";
import "../../sass/text-gradients.scss";

import PropTypes from "prop-types";
import { openCaseStudy } from "../../utils/getProjects";

export default function ProjectCard(props) {
  return (
    <div
      onClick={() => {
        if (props.slug) {
          openCaseStudy(props.slug);
        }
      }}
      className={`project-card ${props.slug ? "clickable" : ""}`}
    >
      <img src={`${props.image}`} alt={`Image about ${props.title}`} />
      <div className="text-section">
        <h2
          style={{
            color: `${props.color}`,
          }}
        >{`${props.title}`}</h2>
        <p>{`${props.description}`}</p>
        <div className="actions">
          <a href="">Read Case Study</a>
        </div>
      </div>
    </div>
  );
}
