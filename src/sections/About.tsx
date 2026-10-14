import React from "react";
import { BookOpen, Compass, Target, GraduationCap, Cpu, Sparkles } from "lucide-react";
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
          {/* Left Column: Unified Academic Dossier Card */}
          <div className="about-dossier-card">
            <div className="dossier-narrative">
              <div className="dossier-eyebrow">
                <GraduationCap size={15} aria-hidden="true" />
                <span>Researcher Profile &amp; Direction</span>
              </div>
              <p className="about-lead-paragraph">
                I am an undergraduate researcher and Computer Science &amp; Engineering student at{" "}
                <strong>{profileData.institution}</strong> (graduating 2027), working at the intersection of{" "}
                <strong>Empirical Machine Learning Reliability</strong> and <strong>Applied Systems</strong>. My research investigates explainable computer vision (Grad-CAM with generative patch augmentation) and evidence-grounded citation verification in NLP to mitigate hallucinations in scientific synthesis. Looking ahead, I am actively preparing for international graduate studies (<strong>M.S./Ph.D.</strong>) and research-driven software engineering roles dedicated to building robust, interpretable intelligent systems.
              </p>
            </div>

            {/* Integrated Parameters Bar (Seamlessly inside the same dossier card) */}
            <div className="dossier-meta-section">
              <span className="dossier-meta-heading">Core Academic Parameters</span>
              <div className="dossier-meta-grid">
                <div className="dossier-meta-item">
                  <div className="meta-icon-pill">
                    <GraduationCap size={15} aria-hidden="true" />
                  </div>
                  <div className="meta-text-block">
                    <span className="meta-label">Program &amp; Institution</span>
                    <span className="meta-value">B.Sc. in CSE • Green University (2027)</span>
                  </div>
                </div>

                <div className="dossier-meta-item">
                  <div className="meta-icon-pill">
                    <Sparkles size={15} aria-hidden="true" />
                  </div>
                  <div className="meta-text-block">
                    <span className="meta-label">Primary Research</span>
                    <span className="meta-value">ML Reliability &amp; Explainable AI</span>
                  </div>
                </div>

                <div className="dossier-meta-item">
                  <div className="meta-icon-pill">
                    <Cpu size={15} aria-hidden="true" />
                  </div>
                  <div className="meta-text-block">
                    <span className="meta-label">Technical Tooling</span>
                    <span className="meta-value">Python (PyTorch) • TypeScript • C++</span>
                  </div>
                </div>

                <div className="dossier-meta-item">
                  <div className="meta-icon-pill">
                    <Target size={15} aria-hidden="true" />
                  </div>
                  <div className="meta-text-block">
                    <span className="meta-label">Academic Objective</span>
                    <span className="meta-value">International M.S. / Ph.D. Trajectory</span>
                  </div>
                </div>
              </div>
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
                  Rigorous CSE curriculum at {profileData.institution}, balancing core theoretical algorithms, operating systems, and discrete mathematics with reproducible experimentation.
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
                  Active inquiries across explainable computer vision (Grad-CAM), generative patch augmentation (DCGAN), and citation stance verification.
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
                  Dedicated to joining international graduate laboratories focused on trustworthy artificial intelligence, NLP robustness, and computational rigor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
