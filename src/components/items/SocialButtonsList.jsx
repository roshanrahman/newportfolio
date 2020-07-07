import React from "react";
import "./SocialButtonsList.scss";
import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiOutlineDribbble,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
  AiOutlineTwitter,
} from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";

import PropTypes from "prop-types";

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
        <a href="https://github.com/roshanrahman">
          <AiFillGithub title="Github link" />
        </a>
      </li>
      <li style={style}>
        <a href="https://dribbble.com/roshan6399">
          <AiOutlineDribbble title="Dribbble link" />
        </a>
      </li>
      <li style={style}>
        <a href="https://www.linkedin.com/in/roshanrahman6399/">
          <AiFillLinkedin title="Linkedin link" />
        </a>
      </li>
      <li style={style}>
        <a href="mailto:roshanrahman6399@gmail.com">
          <AiOutlineMail />
        </a>
      </li>
      <li style={{...style, marginRight: "0px"}}>
        <a href="https://twitter.com/roshan6399">
          <AiOutlineTwitter title="Twitter link" />
        </a>
      </li>
    </ul>
  );
}

export default SocialButtonsList;
