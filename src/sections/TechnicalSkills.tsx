import React from "react";
import { Code2, Cpu, Server, Compass, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { skillCategories } from "../data/skills";
import "./TechnicalSkills.css";

const ICONS = [Code2, Cpu, Server, Compass];

export const TechnicalSkills: React.FC = () => {
  return (
    <section id="skills" className="section-wrapper skills-section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          label="Toolchain &amp; Competencies"
          title="Technical &amp; Analytical Skills"
          lead="Programming languages, deep learning frameworks, systems toolchains, and scientific methodologies."
        />

        <div className="skills-grid">
          {skillCategories.map((category, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div key={category.id} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-icon-box">
                    <IconComponent size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="skill-category-title">{category.title}</h3>
                    <p className="skill-category-desc">{category.description}</p>
                  </div>
                </div>

                <div className="skill-tags-list" aria-label={`Skills in ${category.title}`}>
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      <CheckCircle2 size={12} className="skill-check-icon" aria-hidden="true" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
