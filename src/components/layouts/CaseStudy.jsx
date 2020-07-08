import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import "./CaseStudy.scss";
import Axios from "axios";
import Footer from "../items/Footer";
import DarkModeToggle from "../items/DarkModeToggle";
import { getProjectList } from "../../utils/getProjects";
class CaseStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "> Loading...",
    };
    getProjectList();
  }
  componentWillMount = () => {
    Axios.get(
      "https://raw.githubusercontent.com/roshanrahman/newportfolio/master/assets/casestudies/nitya-gaan.md"
    ).then((result) => {
      this.setState({
        data: result.data,
      });
    });
  };
  render() {
    return (
      <div className={"case-study"}>
        <div className="floating-dark-toggle">
          <DarkModeToggle />
        </div>
        <div className="header-mobile">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          {/* <div className="image-shadow">
            <img
              src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div> */}
          <div className="title">
            <h1>Redesigning Nitya Gaan</h1>
            <h2>
              A redesign project to give this handy app a makeover that
              empathizes with its users better
            </h2>
          </div>
        </div>
        <div className="header">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <div className="gradient"></div>
          <div className="title">
            <h1>Redesigning Nitya Gaan</h1>
            <h2>
              A redesign project to give this handy app a makeover that
              empathizes with its users better
            </h2>
          </div>
        </div>
        <hr />
        <article>
          <ReactMarkdown linkTarget="_blank" source={this.state.data} />
        </article>
        <Footer />
      </div>
    );
  }
}

CaseStudy.propTypes = {};

export default CaseStudy;
