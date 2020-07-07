import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";
import SocialButtonsList from "./SocialButtonsList";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer>
      <div className="content">
        <div className="left">
          <h3>Made with React and Sass</h3>
          <h4>
            Uses assets from Ant Design Icons, react-icons and Unsplash.com
          </h4>
        </div>
        <div className="right">
          <SocialButtonsList size="3.2rem" spacing="1.3rem" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
