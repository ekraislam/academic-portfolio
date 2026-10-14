import React from "react";
import { GraduationCap, FileCheck, Mail, MapPin, Calendar, Download, BookOpen } from "lucide-react";
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
          label="Academic Qualifications &amp; Credentials"
          title="Education &amp; Curriculum Vitae"
          lead="Verified academic enrollment, expected timeline, coursework, and formal credentials."
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
                    <span className="education-timeline-badge">
                      <Calendar size={12} aria-hidden="true" />
                      <span>{edu.period}</span>
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

                  {/* Coursework */}
                  {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                    <div className="education-coursework">
                      <div className="coursework-heading">
                        <BookOpen size={14} className="coursework-icon" aria-hidden="true" />
                        <span>Core Computer Science &amp; Engineering Coursework:</span>
                      </div>
                      <div className="coursework-tags-list">
                        {edu.relevantCoursework.map((course) => (
                          <span key={course} className="coursework-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Curriculum Vitae Status & Download */}
          <div className="cv-card">
            <div className="cv-card-header">
              <div className="cv-icon-box">
                <FileCheck size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="cv-title">Curriculum Vitae</h3>
                <span className="cv-status">Available for Direct Download</span>
              </div>
            </div>

            <p className="cv-text">
              Comprehensive overview of academic coursework, working manuscripts, research pipelines, technical proficiencies, and project repositories.
            </p>

            <div className="cv-actions-group">
              {profileData.cvUrl && (
                <a
                  href={profileData.cvUrl}
                  download="Ekra_Islam_Ohi_Academic_CV.pdf"
                  className="btn btn-primary cv-action-btn"
                  title="Download Academic CV as PDF"
                >
                  <Download size={16} aria-hidden="true" />
                  <span>Download Academic CV (PDF)</span>
                </a>
              )}

              <a
                href={`mailto:${profileData.email}?subject=Academic%20Dossier%20Inquiry%20%E2%80%94%20Ekra%20Islam%20Ohi`}
                className="btn btn-secondary cv-action-btn"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Request Detailed Dossier via Email</span>
              </a>
            </div>

            <div className="cv-note">
              <span>Updated for 2025 academic &amp; professional applications.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
