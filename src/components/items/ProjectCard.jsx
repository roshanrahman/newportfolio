import React from "react";
import "./ProjectCard.scss";
import "../../sass/text-gradients.scss";

import PropTypes from "prop-types";

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default function ProjectCard() {
  return (
    <div className={"project-card"}>
      <img
        src="https://images.unsplash.com/photo-1593530115797-69cea1104197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt=""
      />
      <div className="text-section">
        <h2 className={"nitya-gaan-gradient"}>Nitya Gaan</h2>
        <p>
          Gave this handy app a fresh new makeover that empathises with its
          users better.
        </p>
        <div className="actions">
          <a href="">Read Case Study</a>
        </div>
      </div>
    </div>
  );
}
