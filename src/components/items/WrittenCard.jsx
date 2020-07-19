import PropTypes from "prop-types";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import "./WrittenCard.scss";


WrittenCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default function WrittenCard(props) {
  return (
    <a className="written-card" href={`${props.link}`} target="_blank" rel="noopener noreferrer">
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
