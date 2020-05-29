import React, { Component } from "react";
import {
  AiOutlineBulb,
  AiFillMail,
  AiFillBulb,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillDribbbleCircle,
  AiOutlineDribbble,
} from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { FiGithub, FiArrowDownCircle } from "react-icons/fi";

function IconResolved(props) {
  return resolveIcon(props);
}

function resolveIcon(props) {
  switch (props.children) {
    case "bulb-outlined":
      return <AiOutlineBulb {...props} />;
    case "bulb-fill":
      return <AiFillBulb {...props} />;
    case "email-fill":
      return <AiFillMail {...props} />;
    case "email-outlined":
      return <AiOutlineMail {...props} />;
    case "twitter-fill":
      return <AiOutlineTwitter {...props} />;
    case "twitter-outlined":
      return <RiTwitterLine {...props} />;
    case "github-fill":
      return <AiFillGithub {...props} />;
    case "github-outlined":
      return <FiGithub {...props} />;
    case "dribbble-fill":
      return <AiFillDribbbleCircle {...props} />;
    case "dribbble-outlined":
      return <AiOutlineDribbble {...props} />;
    case "arrow-down-circled":
      return <FiArrowDownCircle {...props} />;
  }
}

export default IconResolved;
