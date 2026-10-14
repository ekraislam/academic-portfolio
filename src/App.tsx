import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { ResearchInterests } from "./sections/ResearchInterests";
import { TechnicalSkills } from "./sections/TechnicalSkills";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { PublicationsPreview } from "./sections/PublicationsPreview";
import { EducationCV } from "./sections/EducationCV";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="app-root">
      {/* Accessible skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <About />
        <ResearchInterests />
        <TechnicalSkills />
        <FeaturedProjects />
        <PublicationsPreview />
        <EducationCV />
        <Contact />
      </main>

      {/* Academic Footer */}
      <Footer />
    </div>
  );
};

export default App;
