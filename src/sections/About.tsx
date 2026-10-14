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
          label="Background &amp; Academic Trajectory"
          title="About Me"
          lead="Academic foundations, technical exploration, and research preparation."
        />

        <div className="about-grid">
          {/* Main Narrative Column */}
          <div className="about-text-column">
            <p className="about-paragraph">
              I am an undergraduate researcher and Computer Science and Engineering student at {profileData.institution} (expected graduation 2026). My coursework combines core algorithmic foundations (including Data Structures, Operating Systems, and Machine Learning) with extensive hands-on software development across Python, TypeScript, and C++.
            </p>
            <p className="about-paragraph">
              My research interests lie at the intersection of Empirical Machine Learning Reliability and Applied Systems. In computer vision, I have investigated deep transfer learning paired with generative patch augmentation (DCGAN) and explainable activation mapping (Grad-CAM) for plant disease diagnosis, which is currently submitted for conference evaluation. In NLP, I focus on evidence-aware stance detection and citation verification under context-isolation protocols to mitigate hallucinations in scientific synthesis.
            </p>
            <p className="about-paragraph">
              Looking toward the future, I am actively preparing for international graduate studies (M.S./Ph.D.) and research-driven software engineering roles. My goal is to contribute to robust, interpretable intelligent systems that provide transparent, empirically grounded solutions to complex domain challenges.
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
                  Rigorous CSE undergraduate curriculum at {profileData.institution}, balancing theoretical algorithms with systems engineering and reproducible experimentation.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Compass size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="pillar-title">Empirical Research</h3>
                <p className="pillar-desc">
                  Active inquiries across explainable computer vision (Grad-CAM), class-imbalance generative modeling, and evidence-grounded citation stance classification.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Target size={20} aria-hidden="true" />
              </div>
              <div>
                <h3 className="pillar-title">Graduate Trajectory</h3>
                <p className="pillar-desc">
                  Focused on pursuing international graduate research programs dedicated to dependable artificial intelligence, natural language reliability, and applied computing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
