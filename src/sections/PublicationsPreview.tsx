import React from "react";
import { FileText, ExternalLink, Mail, Clock } from "lucide-react";
import { GithubIcon } from "../components/GithubIcon";
import { SectionHeading } from "../components/SectionHeading";
import { publicationsData } from "../data/publications";
import { profileData } from "../data/profile";
import "./PublicationsPreview.css";

export const PublicationsPreview: React.FC = () => {
  return (
    <section
      id="publications"
      className="section-wrapper publications-section"
      aria-labelledby="publications-title"
    >
      <div className="container">
        <SectionHeading
          id="publications-title"
          label="Research Manuscripts &amp; Submissions"
          title="Publications &amp; Working Papers"
          lead="Peer-reviewed submissions, conference manuscripts under faculty review, and technical research reports."
        />

        <div className="publications-list">
          {publicationsData.map((pub) => (
            <article key={pub.id} className="publication-card">
              <div className="pub-card-header">
                <div className="pub-badge-group">
                  <span className="pub-status-badge">
                    <Clock size={12} className="pub-status-icon" aria-hidden="true" />
                    <span>{pub.statusBadge}</span>
                  </span>
                  <span className="pub-year-badge">{pub.year}</span>
                </div>

                <div className="pub-actions">
                  {pub.repositoryUrl && (
                    <a
                      href={pub.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-action-btn"
                      title="Inspect technical source code repository"
                    >
                      <GithubIcon size={14} aria-hidden="true" />
                      <span>Repository</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                  {pub.demoUrl && (
                    <a
                      href={pub.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-action-btn pub-action-btn--primary"
                      title="Open live web demonstration"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="pub-title">{pub.title}</h3>

              <div className="pub-meta">
                <span className="pub-authors">{pub.authors.join(", ")}</span>
                <span className="pub-meta-divider">•</span>
                <span className="pub-venue">{pub.venue}</span>
              </div>

              <p className="pub-abstract">{pub.abstract}</p>

              <div className="pub-footer">
                <div className="pub-keywords" aria-label="Keywords">
                  {pub.keywords.map((kw) => (
                    <span key={kw} className="pub-keyword-tag">
                      {kw}
                    </span>
                  ))}
                </div>

                {pub.notes && (
                  <div className="pub-note-box">
                    <span>{pub.notes}</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Inquiry Card */}
        <div className="publications-inquiry-box">
          <div className="inquiry-icon-box">
            <FileText size={20} aria-hidden="true" />
          </div>
          <div className="inquiry-content">
            <h4 className="inquiry-title">Manuscript Inquiries &amp; Academic Correspondence</h4>
            <p className="inquiry-text">
              For research collaboration, preprint draft requests, or academic evaluation inquiries, please reach out directly:
            </p>
          </div>
          <a
            href={`mailto:${profileData.email}?subject=Research%20Manuscript%20Inquiry:%20Ekra%20Islam%20Ohi`}
            className="btn btn-secondary inquiry-btn"
          >
            <Mail size={15} aria-hidden="true" />
            <span>Contact via Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
