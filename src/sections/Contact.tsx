import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { GithubIcon } from "../components/GithubIcon";
import { SectionHeading } from "../components/SectionHeading";
import { profileData } from "../data/profile";
import "./Contact.css";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const textArea = document.createElement("textarea");
      textArea.value = profileData.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          label="Communication &amp; Inquiries"
          title="Get in Touch"
          lead="I welcome scholarly discussions, research collaborations, graduate study inquiries, and software engineering opportunities."
        />

        <div className="contact-grid">
          {/* Primary Contact Channels */}
          <div className="contact-channels">
            {/* Email Card */}
            <div className="contact-method-card">
              <div className="contact-icon-box">
                <Mail size={22} aria-hidden="true" />
              </div>
              <div className="contact-method-info">
                <span className="contact-method-label">Academic &amp; Professional Email</span>
                <a href={`mailto:${profileData.email}`} className="contact-method-value">
                  {profileData.email}
                </a>
              </div>
              <div className="contact-method-actions">
                <a
                  href={`mailto:${profileData.email}`}
                  className="btn btn-secondary contact-action-btn"
                  title="Open in mail client"
                >
                  <Mail size={15} aria-hidden="true" />
                  <span>Send Mail</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary contact-action-btn"
                  aria-label="Copy email address to clipboard"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="copied-icon" aria-hidden="true" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} aria-hidden="true" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-method-card">
              <div className="contact-icon-box">
                <GithubIcon size={22} aria-hidden="true" />
              </div>
              <div className="contact-method-info">
                <span className="contact-method-label">GitHub Source Code Profile</span>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-value"
                >
                  github.com/ekraislam
                </a>
              </div>
              <div className="contact-method-actions">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary contact-action-btn"
                >
                  <GithubIcon size={15} aria-hidden="true" />
                  <span>Visit Profile</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Academic Inquiries Note */}
          <div className="contact-aside-card">
            <div className="aside-header">
              <MessageSquareCode size={20} className="aside-icon" aria-hidden="true" />
              <h3 className="aside-title">Academic &amp; Research Inquiries</h3>
            </div>
            <p className="aside-text">
              When contacting regarding academic collaboration, prospective research projects, or international higher-study opportunities, please include:
            </p>
            <ul className="aside-list">
              <li>Project or research domain topic of interest</li>
              <li>Relevant institution or organization affiliation</li>
              <li>Expected timeline or preliminary proposal notes</li>
            </ul>
            <div className="aside-disclaimer">
              <span>Notice: Additional professional and academic profiles (such as LinkedIn or ORCID) will be added upon confirmation.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
