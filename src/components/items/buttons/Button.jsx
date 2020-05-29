import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import "../../../sass/box-gradients.scss";
import "../../../sass/shared.scss";
import ClassListForComponent from "../../../utils/className";
import IconResolved from "../Icon";
/*
Button needs:
Icon
Label - passed as child
OnPressed
Rounded
*/

function createClassNames(props) {
  let classes = new ClassListForComponent();
  classes.addItem(props.otherClasses);
  classes.addItem("button");
  if (props.rounded) {
    classes.addItem("rounded");
  }
  if (props.outlined) {
    classes.addItem("outlined");
  }
  if (props.gradient) {
    switch (props.gradient) {
      case "primary":
        classes.addItem("box-primary-gradient");
        break;
      case "dribbble":
        classes.addItem("box-dribbble-gradient");
        break;
      case "github":
        classes.addItem("box-github-gradient");
        break;
      default:
        break;
    }
  }
  return classes.string;
}

function renderContent(props) {
  if (props.icon) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconResolved
          style={{ lineHeight: "30px", fontSize: "18px", marginRight: "10px" }}
        >
          {props.icon}
        </IconResolved>
        {props.children}{" "}
      </div>
    );
  }
  return props.children;
}

function computedStyle(props) {
  let buttonColor;

  if (props.color) {
    buttonColor = props.color;
  } else {
    buttonColor = "var(--bg-color)";
  }
  let style = {};
  if (props.textSize) {
    style.fontSize = props.textSize;
  }
  style.backgroundColor = buttonColor;
  return style;
}

function Button(props) {
  return (
    <button
      style={computedStyle(props)}
      className={createClassNames(props)}
      onClick={props.onPressed}
    >
      {renderContent(props)}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  gradient: PropTypes.string,
  color: PropTypes.string,
  onPressed: PropTypes.func.isRequired,
  rounded: PropTypes.bool,
  otherClasses: PropTypes.string,
  textSize: PropTypes.string,
};

export default Button;
