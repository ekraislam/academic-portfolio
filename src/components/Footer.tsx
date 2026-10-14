import React from "react";
import { ArrowUp, Mail, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { WhatsappIcon } from "./WhatsappIcon";
import { profileData } from "../data/profile";
import "./Footer.css";

const CURRENT_YEAR = 2025;

export const Footer: React.FC = () => {

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Tier */}
        <div className="footer-top">
          <div className="footer-identity">
            <span className="footer-name">{profileData.name}</span>
            <span className="footer-affiliation">{profileData.affiliation}</span>
            <div className="footer-integrity-badge">
              <ShieldCheck size={14} className="integrity-icon" aria-hidden="true" />
              <span>Academic &amp; Research Portfolio • Green University of Bangladesh</span>
            </div>
          </div>

          <div className="footer-links-group">
            {profileData.cvUrl && (
              <a
                href={profileData.cvUrl}
                download="Ekra_Islam_Ohi_Academic_CV.pdf"
                className="footer-link"
                title="Download Academic CV (PDF)"
              >
                <span>Curriculum Vitae</span>
              </a>
            )}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <GithubIcon size={15} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            {profileData.linkedin && (
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <LinkedinIcon size={15} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            )}
            {profileData.whatsappUrl && (
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                title="Chat on WhatsApp"
              >
                <WhatsappIcon size={15} aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            )}
            <a href={`mailto:${profileData.email}`} className="footer-link">
              <Mail size={15} aria-hidden="true" />
              <span>Email</span>
            </a>
            <a href="#main-content" className="footer-link footer-top-btn">
              <ArrowUp size={15} aria-hidden="true" />
              <span>Back to Top</span>
            </a>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {CURRENT_YEAR} {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
