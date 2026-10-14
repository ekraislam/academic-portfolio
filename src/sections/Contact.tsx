import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { GithubIcon } from "../components/GithubIcon";
import { LinkedinIcon } from "../components/LinkedinIcon";
import { WhatsappIcon } from "../components/WhatsappIcon";
import { SectionHeading } from "../components/SectionHeading";
import { profileData } from "../data/profile";
import "./Contact.css";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const textArea = document.createElement("textarea");
      textArea.value = profileData.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyWhatsApp = async () => {
    if (!profileData.whatsapp) return;
    try {
      await navigator.clipboard.writeText(profileData.whatsapp);
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2500);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = profileData.whatsapp;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2500);
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
                  {copiedEmail ? (
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

            {/* WhatsApp Direct Messaging Card */}
            {profileData.whatsapp && (
              <div className="contact-method-card contact-method-card--whatsapp">
                <div className="contact-icon-box contact-icon-box--whatsapp">
                  <WhatsappIcon size={22} aria-hidden="true" />
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">Direct Messaging &amp; WhatsApp</span>
                  <a
                    href={profileData.whatsappUrl || `https://wa.me/8801581828741`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-value"
                  >
                    {profileData.whatsapp}
                  </a>
                </div>
                <div className="contact-method-actions">
                  <a
                    href={profileData.whatsappUrl || `https://wa.me/8801581828741`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary contact-action-btn contact-action-btn--whatsapp"
                    title="Open WhatsApp chat"
                  >
                    <WhatsappIcon size={15} aria-hidden="true" />
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyWhatsApp}
                    className="btn btn-secondary contact-action-btn"
                    aria-label="Copy WhatsApp number"
                    title="Copy WhatsApp number"
                  >
                    {copiedWhatsApp ? (
                      <>
                        <Check size={15} className="copied-icon" aria-hidden="true" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={15} aria-hidden="true" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

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

            {/* LinkedIn Card */}
            {profileData.linkedin && (
              <div className="contact-method-card">
                <div className="contact-icon-box">
                  <LinkedinIcon size={22} aria-hidden="true" />
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">LinkedIn Professional Network</span>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-value"
                  >
                    linkedin.com/in/ekra-islam-ohi
                  </a>
                </div>
                <div className="contact-method-actions">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary contact-action-btn"
                  >
                    <LinkedinIcon size={15} aria-hidden="true" />
                    <span>Connect</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
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
              <span>Primary academic correspondence channel is via email. Responses are typically provided within 24–48 hours.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
