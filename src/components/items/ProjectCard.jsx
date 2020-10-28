import React from "react";
import "../../sass/text-gradients.scss";
import { openLink } from "../../utils/browser";
import { openCaseStudy } from "../../utils/getProjects";
import "./ProjectCard.scss";


export default function ProjectCard(props) {
  return (
    <div
    onClick={() => {
      if (props.slug) {
        openCaseStudy(props.slug);
      }else {
        openLink(props.url);
      }
      }}
      className={`project-card clickable`}
    >
      <img src={`${props.image}`} alt={`${props.title}`} />
      <div className="text-section">
        <h2
          style={{
            color: `${props.color}`,
          }}
        >{`${props.title}`}</h2>
        <p>{`${props.description}`}</p>
        <div className="actions">
          <span>{props.actionText}</span>
        </div>
      </div>
    </div>
  );
}
