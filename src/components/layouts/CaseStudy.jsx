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
  produceRandomProjectData,
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

    this.getProjectDetails(this.slug);
  }

  getProjectDetails = async (slug) => {
    const project = await getProjectDetailsBySlug(this.slug);
    const articleData = await Axios.get(project.articleUrl);
    this.setState({
      project,
      data: articleData.data,
      loading: false,
    });
    document.title = project.title;
  };

  renderLoadingComponent = () => {
    return (
      <div className="loading">
        <h2>Loading Case Study</h2>
        <h3>This shouldn't take too long</h3>
      </div>
    );
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
              src={this.state.project.coverImage}
              alt="Cover Image for illustration purpose"
            />
          </div>
          {/* <div className="image-shadow">
            <img
              src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div> */}
          <div className="title">
            <h1>{this.state.project.articleTitle}</h1>
            <h2>{this.state.project.description}</h2>
          </div>
        </div>
        <div className="header">
          <div className="image">
            <img
              src={this.state.project.coverImage}
              alt="Cover Image for illustration purpose"
            />
          </div>
          <div className="gradient"></div>
          <div className="title">
            <h1>{this.state.project.articleTitle}</h1>
            <h2>{this.state.project.description}</h2>
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
