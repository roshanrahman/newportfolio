import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import "./CaseStudy.scss";
import Axios from "axios";
import Footer from "../items/Footer";
import DarkModeToggle from "../items/DarkModeToggle";
import {
  getProjectList,
  getProjectDetailsBySlug,
} from "../../utils/getProjects";
class CaseStudy extends Component {
  slug = "";
  constructor(props) {
    super(props);
    this.slug = this.props.match.params.slug;
    this.state = {
      loading: true,
      project: {},
      data: "",
    };
  }
  componentWillMount = async () => {
    const project = await getProjectDetailsBySlug(this.slug);
    const article = Axios.get(project.absoluteUrl);
    this.setState({ ...this.state, project, loading: false, data: article });
  };

  renderLoadingComponent = () => {
    return <div>Hello</div>;
  };
  render() {
    if (this.state.loading) {
      return this.renderLoadingComponent();
    }
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
          <ReactMarkdown linkTarget="_blank" source={this.state.project} />
        </article>
        <Footer />
      </div>
    );
  }
}

CaseStudy.propTypes = {};

export default CaseStudy;
