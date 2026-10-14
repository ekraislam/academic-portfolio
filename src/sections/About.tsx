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
          {/* Main Narrative & Fast Facts Column */}
          <div className="about-text-column">
            <div className="about-narrative-card">
              <p className="about-lead-paragraph">
                I am an undergraduate researcher and Computer Science &amp; Engineering student at{" "}
                <strong>{profileData.institution}</strong> (graduating 2027), working at the intersection of{" "}
                <strong>Empirical Machine Learning Reliability</strong> and <strong>Applied Systems</strong>. My research explores explainable computer vision (Grad-CAM with generative patch augmentation) and evidence-grounded citation verification in NLP to mitigate hallucinations in scientific synthesis. Looking ahead, I am actively preparing for international graduate studies (<strong>M.S./Ph.D.</strong>) and research-driven software engineering roles dedicated to building robust, interpretable intelligent systems.
              </p>
            </div>

            {/* Fast-Facts Highlights Grid */}
            <div className="about-highlights-grid">
              <div className="about-highlight-card">
                <div className="highlight-icon-box">
                  <GraduationCap size={18} aria-hidden="true" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">Degree &amp; Year</span>
                  <span className="highlight-value">B.Sc. in CSE (2023–2027)</span>
                </div>
              </div>

              <div className="about-highlight-card">
                <div className="highlight-icon-box">
                  <Sparkles size={18} aria-hidden="true" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">Research Focus</span>
                  <span className="highlight-value">ML Reliability &amp; XAI</span>
                </div>
              </div>

              <div className="about-highlight-card">
                <div className="highlight-icon-box">
                  <Cpu size={18} aria-hidden="true" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">Core Technical Stack</span>
                  <span className="highlight-value">Python (PyTorch) • TS • C++</span>
                </div>
              </div>

              <div className="about-highlight-card">
                <div className="highlight-icon-box">
                  <Target size={18} aria-hidden="true" />
                </div>
                <div className="highlight-info">
                  <span className="highlight-label">Academic Path</span>
                  <span className="highlight-value">International M.S./Ph.D.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Card Column */}
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
