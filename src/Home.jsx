import React from "react";
import AppBar from "./components/items/AppBar";
import HomeSection from "./components/layouts/HomeSection";
import DesignProjectsSection from "./components/layouts/DesignProjectsSection";
import CodingProjectsSection from "./components/layouts/CodingProjectsSection";
import WrittenProjectsSection from "./components/layouts/WrittenProjectsSection";
import AboutMeSection from "./components/layouts/AboutMeSection";
import ContactSection from "./components/layouts/ContactSection";
import Footer from "./components/items/Footer";
import scrollToComponent from "react-scroll-to-component";
import { getProjectList } from "./utils/getProjects";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.designRef = React.createRef();
    this.codingRef = React.createRef();
    this.contactRef = React.createRef();
    this.aboutMeRef = React.createRef();
    this.state = {
      loading: true,
      designProjects: [],
      codingProjects: [],
      articles: [],
    };
    this.loadProjects();
  }

  loadProjects = async () => {
    const projects = await getProjectList();
    this.setState({
      designProjects: projects.filter((project) => project.type === "design"),
      codingProjects: projects.filter((project) => project.type === "coding"),
      articles: projects.filter((project) => project.type === "article"),
      loading: false,
    });
  };

  onScrollIntent = (intent) => {
    switch (intent) {
      case "home":
        scrollToComponent(this.homeRef.current, {
          align: "top",
        });
        break;

      case "design":
        scrollToComponent(this.designRef.current, {
          align: "top",
        });
        break;

      case "coding":
        scrollToComponent(this.codingRef.current, {
          align: "top",
        });
        break;

      case "aboutMe":
        scrollToComponent(this.aboutMeRef.current, {
          align: "top",
        });
        break;

      case "contact":
        scrollToComponent(this.contactRef.current, {
          align: "top",
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <AppBar
          onNavIntent={(intent) => {
            this.onScrollIntent(intent);
          }}
        />
        <HomeSection
          ref={this.homeRef}
          onNavIntent={(intent) => {
            this.onScrollIntent(intent);
          }}
        />
        <DesignProjectsSection
          ref={this.designRef}
          projects={this.state.designProjects}
        />
        <CodingProjectsSection
          ref={this.codingRef}
          projects={this.state.codingProjects}
        />
        <WrittenProjectsSection projects={this.state.articles} />
        <AboutMeSection ref={this.aboutMeRef} />
        <ContactSection ref={this.contactRef} />
        <Footer />
      </div>
    );
  }
}

export default Home;
