import React from "react";
import "./WrittenCard.scss";
import { AiOutlineAlert, AiOutlineLink } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";

import PropTypes from "prop-types";

WrittenCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default function WrittenCard(props) {
  return (
    <a className="written-card" href={`${props.link}`} target="_blank">
      <img src={`${props.img}`} alt="" />
      <div className="text-section">
        <h2>{props.title}</h2>
        <p>{props.publisher}</p>
      </div>
      <div className="icon">
        <RiExternalLinkLine />
      </div>
    </a>
  );
}
