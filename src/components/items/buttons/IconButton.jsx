import React from "react";
import PropTypes from "prop-types";
import ClassListForComponent from "../../../utils/className";
import IconResolved from "../Icon";
import "./IconButton.scss";
function createClassNames(props) {
  let classes = new ClassListForComponent();
  classes.addItem("icon-button");
  return classes.string;
}

function IconButton(props) {
  if (props.color === null) {
    props.color = "var(--fg-color)";
  }
  if (props.size === null) {
    props.size = "1px";
  }
  return (
    <span className={createClassNames(props)} onClick={props.onPressed}>
      <IconResolved size={`${props.size}`} style={{ color: `${props.color}` }}>
        {props.icon}
      </IconResolved>
    </span>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPressed: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default IconButton;
