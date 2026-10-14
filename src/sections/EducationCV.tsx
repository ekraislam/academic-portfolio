import React from "react";
import { GraduationCap, FileCheck, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { educationData } from "../data/education";
import { profileData } from "../data/profile";
import "./EducationCV.css";

export const EducationCV: React.FC = () => {
  return (
    <section id="education" className="section-wrapper education-section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          label="Academic Qualifications"
          title="Education &amp; Curriculum Vitae"
          lead="Verified academic enrollment and formal credentials."
        />

        <div className="education-grid">
          {/* Left Column: Verified Degree Details */}
          <div className="education-main-column">
            {educationData.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="education-card-icon">
                  <GraduationCap size={24} aria-hidden="true" />
                </div>
                <div className="education-card-body">
                  <div className="education-status-row">
                    <span className="academic-badge academic-badge--primary">
                      {edu.status}
                    </span>
                    <span className="education-location">
                      <MapPin size={12} aria-hidden="true" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                  <h3 className="education-degree">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Curriculum Vitae Status & Request */}
          <div className="cv-card">
            <div className="cv-card-header">
              <div className="cv-icon-box">
                <FileCheck size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="cv-title">Curriculum Vitae</h3>
                <span className="cv-status">Available Upon Request</span>
              </div>
            </div>

            <p className="cv-text">
              Academic background, project summaries, and technical competencies can be provided upon direct request.
            </p>

            <div className="cv-note">
              <span>Please direct inquiries regarding academic records and credentials via email.</span>
            </div>

            <a
              href={`mailto:${profileData.email}?subject=Academic%20CV%20Inquiry%20%E2%80%94%20Ekra%20Islam%20Ohi`}
              className="btn btn-primary cv-action-btn"
            >
              <Mail size={16} aria-hidden="true" />
              <span>Request Academic CV via Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
