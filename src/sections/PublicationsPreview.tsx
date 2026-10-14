import React from "react";
import { FileText, Mail } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { profileData } from "../data/profile";
import "./PublicationsPreview.css";

export const PublicationsPreview: React.FC = () => {
  return (
    <section id="publications" className="section-wrapper publications-section" aria-labelledby="publications-title">
      <div className="container">
        <SectionHeading
          id="publications-title"
          label="Scholarly Records"
          title="Publications &amp; Bibliographic Records"
          lead="Formal academic publications, proceedings, and citation records."
        />

        {/* Neutral Academic Placeholder */}
        <div className="publications-placeholder-card">
          <div className="placeholder-icon-box">
            <FileText size={24} aria-hidden="true" />
          </div>
          <div className="placeholder-content">
            <h3 className="placeholder-title">Publication Records Status</h3>
            <p className="placeholder-statement">
              Verified publication records and bibliographic details will be listed here after confirmation.
            </p>
            <p className="placeholder-inquiry">
              For academic inquiries or research correspondence, please reach out directly:
            </p>
            <div className="placeholder-action">
              <a
                href={`mailto:${profileData.email}?subject=Academic%20Inquiry%20%E2%80%94%20Ekra%20Islam%20Ohi`}
                className="btn btn-secondary placeholder-btn"
              >
                <Mail size={15} aria-hidden="true" />
                <span>Contact via {profileData.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
