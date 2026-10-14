import React from "react";
import { BookOpen, Compass, Target, GraduationCap } from "lucide-react";
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
          {/* Left Column: Complete Scholarly Narrative Card */}
          <div className="about-narrative-card">
            <div className="about-card-header">
              <div className="about-eyebrow">
                <GraduationCap size={16} aria-hidden="true" />
                <span>Academic Foundations &amp; Research Trajectory</span>
              </div>
            </div>

            <div className="about-narrative-content">
              <p className="about-paragraph">
                I am an undergraduate researcher and Computer Science and Engineering student at{" "}
                <strong>{profileData.institution}</strong> (expected graduation 2027). My coursework combines rigorous algorithmic foundations—including Data Structures, Algorithms, Operating Systems, and Machine Learning theory—with extensive hands-on software development across Python, TypeScript, and C++.
              </p>

              <p className="about-paragraph">
                My primary research inquiries center on <strong>Empirical Machine Learning Reliability</strong> and <strong>Applied Intelligent Systems</strong>. In computer vision, I have explored deep transfer learning paired with generative patch augmentation (DCGAN) and explainable activation mapping (Grad-CAM) for plant pathology diagnosis, which is currently under conference peer review. In natural language processing, I investigate evidence-grounded stance classification and citation verification under context-isolation protocols to mitigate hallucinations in scientific literature synthesis.
              </p>

              <p className="about-paragraph">
                Looking toward the future, I am actively preparing for international graduate studies (<strong>M.S./Ph.D.</strong>) and research-driven software engineering roles. My overarching aspiration is to engineer robust, interpretable intelligent systems that provide transparent, mathematically sound, and empirically grounded solutions to complex domain challenges.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Balanced Pillars */}
          <div className="about-pillars-column">
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">Academic Foundations</h3>
                <p className="pillar-desc">
                  Rigorous CSE undergraduate curriculum at {profileData.institution}, balancing core theoretical algorithms, operating systems, and discrete mathematics with reproducible experimentation.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Compass size={20} aria-hidden="true" />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">Empirical Research</h3>
                <p className="pillar-desc">
                  Active inquiries across explainable computer vision (Grad-CAM), generative patch augmentation (DCGAN), and citation stance verification to eliminate hallucinated assertions.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Target size={20} aria-hidden="true" />
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">Graduate Trajectory</h3>
                <p className="pillar-desc">
                  Dedicated to joining international graduate research laboratories focused on trustworthy artificial intelligence, NLP robustness, and dependable software architectures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
