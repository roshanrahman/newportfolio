import React from "react";
import AppBar from "./components/items/AppBar";
import HomeSection from "./components/layouts/HomeSection";
import DesignProjectsSection from "./components/layouts/DesignProjectsSection";
import CodingProjectsSection from "./components/layouts/CodingProjectsSection";
function App() {
  return (
    <div className="App">
      <AppBar />
      <HomeSection />
      <DesignProjectsSection />
      <CodingProjectsSection />
      <HomeSection />
    </div>
  );
}

export default App;
