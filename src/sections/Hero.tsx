import React from "react";
import { ArrowDown, Code2, Mail, GraduationCap } from "lucide-react";
import { profileData } from "../data/profile";
import { ProfilePhotoPlaceholder } from "../components/ProfilePhotoPlaceholder";
import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" aria-labelledby="hero-name">
      <div className="container hero-container">
        {/* Left Column: Primary Academic Narrative */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <GraduationCap size={16} className="eyebrow-icon" aria-hidden="true" />
            <span>Computer Science &amp; Engineering • Undergraduate</span>
          </div>

          <h1 id="hero-name" className="hero-name">
            {profileData.name}
          </h1>

          <p className="hero-affiliation">
            {profileData.affiliation}
          </p>

          {/* Direction Badges */}
          <div className="hero-directions" aria-label="Core Professional Focus">
            {profileData.directions.map((direction) => (
              <span key={direction} className="academic-badge academic-badge--teal">
                {direction}
              </span>
            ))}
          </div>

          {/* Verified Introduction */}
          <p className="hero-intro">
            {profileData.introduction}
          </p>

          {/* Research Interest Tags */}
          <div className="hero-interests">
            <span className="interests-label">Areas of Interest:</span>
            <div className="interests-list">
              {profileData.interestTags.map((tag) => (
                <span key={tag} className="academic-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="hero-actions">
            <a href="#research" className="btn btn-primary">
              <ArrowDown size={16} aria-hidden="true" />
              <span>Explore Research</span>
            </a>
            <a href="#projects" className="btn btn-secondary">
              <Code2 size={16} aria-hidden="true" />
              <span>View Projects</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={16} aria-hidden="true" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Frame */}
        <div className="hero-aside">
          <ProfilePhotoPlaceholder
            name={profileData.name}
            photoUrl={profileData.photoUrl}
          />
        </div>
      </div>
    </section>
  );
};
