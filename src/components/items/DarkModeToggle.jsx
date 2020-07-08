import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../utils/context";
import "./DarkModeToggle.scss";
import { isDarkTheme, toggleDarkTheme } from "../../utils/context";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    let isDark = false;
    if (isDarkTheme()) {
      isDark = true;
    }
    this.state = {
      isDark,
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";
        this.setState({
          isDark: newColorScheme === "dark",
        });
      });
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        <button
          onClick={() => {
            toggleDarkTheme();
            this.setState({ isDark: !this.state.isDark });
          }}
        >
          {this.state.isDark ? <RiSunLine /> : <RiMoonLine />}
        </button>
      </div>
    );
  }
}

DarkModeToggle.propTypes = {};

export default DarkModeToggle;
