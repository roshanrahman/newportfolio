import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import "./CaseStudy.scss";
class CaseStudy extends Component {
  
  render() {
  let input = `
  `;
    return (
      <div className={"case-study"}>
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
            <h2>A redesign project to give this handy app a makeover that empathizes with its users better</h2>
          </div>
        </div>
        <hr/>
        <article>
        <ReactMarkdown source={input} />
        </article>
      </div>
    );
  }
}

CaseStudy.propTypes = {};

export default CaseStudy;
