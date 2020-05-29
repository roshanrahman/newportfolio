import React from "react";
import "./ProjectCard.scss";
import "../../sass/text-gradients.scss";
export default function ProjectCard() {
  return (
    <div className={"project-card"}>
      <img src="https://i.picsum.photos/id/173/2000/2000.jpg" alt="" />
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
