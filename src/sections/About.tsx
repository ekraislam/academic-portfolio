import React from "react";
import { BookOpen, Compass, Target } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { profileData } from "../data/profile";
import "./About.css";

export const About: React.FC = () => {
  return (
    <section id="about" className="section-wrapper about-section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          label="Background &amp; Motivation"
          title="About Me"
          lead="Academic foundation, intellectual curiosity, and long-term research direction."
        />

        <div className="about-grid">
          {/* Main Narrative Column */}
          <div className="about-text-column">
            <p className="about-paragraph">
              I am an undergraduate student pursuing a Bachelor of Science in Computer Science and Engineering at {profileData.institution}. My academic training centers on building a solid foundation in algorithms, computing principles, and software engineering methodologies.
            </p>
            <p className="about-paragraph">
              My technical interests are grounded in understanding how computational models can be made more reliable, interpretable, and practically useful. I am particularly drawn to challenges in Natural Language Processing—such as verifiable citation attribution and evidence evaluation—as well as Explainable Computer Vision and offline-first software systems.
            </p>
            <p className="about-paragraph">
              Looking forward, my objective is to bridge rigorous software development with systematic academic research, preparing for international higher studies where I can contribute to dependable artificial intelligence and human-centered computational tools.
            </p>
          </div>

          {/* Pillars Card Column */}
          <div className="about-pillars-column">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="pillar-title">Academic Foundations</h3>
                <p className="pillar-desc">
                  Focused study in Computer Science and Engineering at {profileData.institution}, combining theoretical fundamentals with hands-on systems implementation.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Compass size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="pillar-title">Research Curiosity</h3>
                <p className="pillar-desc">
                  Exploring reliability, stance verification, and hallucination reduction in LLM-assisted knowledge synthesis, alongside explainable vision architectures.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Target size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="pillar-title">Future Trajectory</h3>
                <p className="pillar-desc">
                  Preparing for international graduate studies and research-oriented engineering roles dedicated to responsible, empirically grounded intelligent systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
