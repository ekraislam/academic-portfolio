import React, { useState, useEffect } from "react";
import { Mail, Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { WhatsappIcon } from "./WhatsappIcon";
import { profileData } from "../data/profile";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <div className="container header-container">
        {/* Brand */}
        <a href="#main-content" className="header-brand" aria-label="Ekra Islam Ohi Home">
          <span className="brand-name">{profileData.name}</span>
          <span className="brand-tag">Academic &amp; Research Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Action: Primary Academic CTA */}
        <div className="header-actions">
          {profileData.cvUrl && (
            <a
              href={profileData.cvUrl}
              download="Ekra_Islam_Ohi_Academic_CV.pdf"
              className="action-icon-link action-icon-link--cv"
              aria-label="Download Academic CV (PDF)"
              title="Download Academic CV"
            >
              <FileDown size={15} aria-hidden="true" />
              <span className="action-text">CV (PDF)</span>
            </a>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${isOpen ? "mobile-drawer--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="container mobile-drawer-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="mobile-nav-link" onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-drawer-footer">
            {profileData.cvUrl && (
              <a
                href={profileData.cvUrl}
                download="Ekra_Islam_Ohi_Academic_CV.pdf"
                className="btn btn-primary mobile-footer-btn"
                onClick={closeMenu}
              >
                <FileDown size={16} aria-hidden="true" />
                <span>Download Academic CV (PDF)</span>
              </a>
            )}
            {profileData.whatsappUrl && (
              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mobile-footer-btn mobile-footer-btn--whatsapp"
                onClick={closeMenu}
              >
                <WhatsappIcon size={16} aria-hidden="true" />
                <span>WhatsApp ({profileData.whatsapp})</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
            <a
              href={`mailto:${profileData.email}`}
              className="btn btn-secondary mobile-footer-btn"
              onClick={closeMenu}
            >
              <Mail size={16} aria-hidden="true" />
              <span>{profileData.email}</span>
            </a>
            <div className="mobile-social-row">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mobile-social-half"
                onClick={closeMenu}
              >
                <GithubIcon size={16} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary mobile-social-half"
                  onClick={closeMenu}
                >
                  <LinkedinIcon size={16} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
