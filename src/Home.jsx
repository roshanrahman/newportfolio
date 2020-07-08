import React from "react";
import AppBar from "./components/items/AppBar";
import HomeSection from "./components/layouts/HomeSection";
import DesignProjectsSection from "./components/layouts/DesignProjectsSection";
import CodingProjectsSection from "./components/layouts/CodingProjectsSection";
import WrittenProjectsSection from "./components/layouts/WrittenProjectsSection";
import AboutMeSection from "./components/layouts/AboutMeSection";
import ContactSection from "./components/layouts/ContactSection";
import Footer from "./components/items/Footer";

function Home() {
  return (
    <div className="App">
      <AppBar />
      <HomeSection />
      <DesignProjectsSection />
      <CodingProjectsSection />
      <WrittenProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;