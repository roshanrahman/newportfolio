import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import "./CaseStudy.scss";
import Axios from "axios";
import Footer from "../items/Footer";
class CaseStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "> Loading...",
    };
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
        <button className="floating-dark-toggle">Toggle Dark Mode</button>

        <div className="header-mobile">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1559420516-8be4f1c1984f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
              alt=""
            />
          </div>
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
              src="https://images.unsplash.com/photo-1559420516-8be4f1c1984f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
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
