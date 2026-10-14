import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { researchAreas } from "../data/research";
import "./ResearchInterests.css";

export const ResearchInterests: React.FC = () => {
  return (
    <section id="research" className="section-wrapper research-section" aria-labelledby="research-title">
      <div className="container">
        <SectionHeading
          id="research-title"
          label="Scholarly Interests"
          title="Research &amp; Exploration Areas"
          lead="These represent core academic domains and technical questions of interest. They reflect ongoing intellectual curiosity and project exploration rather than claims of formal publication."
        />

        <div className="research-grid">
          {researchAreas.map((area) => (
            <article key={area.id} className="research-card">
              <div className="research-card-header">
                <span className="academic-badge academic-badge--teal">
                  <Sparkles size={12} aria-hidden="true" />
                  <span>{area.category}</span>
                </span>
                <h3 className="research-card-title">{area.title}</h3>
              </div>

              <p className="research-card-description">{area.description}</p>

              <div className="research-card-topics">
                <span className="topics-heading">Topics &amp; Questions of Focus:</span>
                <ul className="topics-list">
                  {area.focusTopics.map((topic) => (
                    <li key={topic} className="topic-item">
                      <CheckCircle2 size={14} className="topic-icon" aria-hidden="true" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
