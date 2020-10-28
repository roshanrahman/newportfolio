import React from "react";
import "./SocialButtonsList.scss";
import {
  AiFillGithub,
  AiOutlineDribbble,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

import PropTypes from "prop-types";
import { RiBehanceLine } from "react-icons/ri";

SocialButtonsList.propTypes = {
  size: PropTypes.string.isRequired,
  spacing: PropTypes.string.isRequired,
};

function computeStyles(props) {
  return {
    fontSize: props.size,
    marginRight: props.spacing,
  };
}

function SocialButtonsList(props) {
  let style = computeStyles(props);
  return (
    <ul className={"social-buttons-list"}>
      <li style={style}>
        <a
          href="https://www.behance.net/roshanrahman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiBehanceLine title="Behance link" />
        </a>
      </li>
      <li style={style}>
        <a
          href="https://dribbble.com/roshan6399"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineDribbble title="Dribbble link" />
        </a>
      </li>
      <li style={style}>
        <a
          href="https://github.com/roshanrahman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub title="Github link" />
        </a>
      </li>
      <li style={style}>
        <a
          href="https://www.linkedin.com/in/roshanrahman6399/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin title="Linkedin link" />
        </a>
      </li>
      <li style={style}>
        <a
          href="mailto:roshanrahman6399@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
      </li>
      <li style={{ ...style, marginRight: "0px" }}>
        <a
          href="https://twitter.com/roshan6399"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter title="Twitter link" />
        </a>
      </li>
    </ul>
  );
}

export default SocialButtonsList;
