import React from "react";
import { UserCheck } from "lucide-react";
import "./ProfilePhotoPlaceholder.css";

interface ProfilePhotoProps {
  /**
   * PHOTO REPLACEMENT INSTRUCTION:
   * To display a genuine photograph:
   * 1. Place your photo file (e.g., ohi-photo.jpg) into the `public/assets/` folder.
   * 2. Pass the path here: photoUrl="/assets/ohi-photo.jpg"
   * If left undefined or null, the tasteful academic monogram placeholder will be rendered.
   */
  photoUrl?: string | null;
  name?: string;
}

export const ProfilePhotoPlaceholder: React.FC<ProfilePhotoProps> = ({
  photoUrl = null,
  name = "Ekra Islam Ohi",
}) => {
  if (photoUrl) {
    return (
      <div className="profile-frame">
        <img
          src={photoUrl}
          alt={`Photograph of ${name}`}
          className="profile-photo"
          width="260"
          height="310"
        />
        <div className="profile-caption">
          <span className="profile-caption-name">{name}</span>
          <span className="profile-caption-sub">CSE • Green University of Bangladesh</span>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-frame" aria-label={`Academic profile monogram for ${name}`}>
      <div className="monogram-box">
        <div className="monogram-inner">
          <span className="monogram-initials">EIO</span>
          <span className="monogram-tag">Academic Profile</span>
        </div>
      </div>
      <div className="profile-caption">
        <div className="profile-caption-status">
          <UserCheck size={14} className="caption-icon" aria-hidden="true" />
          <span className="profile-caption-name">{name}</span>
        </div>
        <span className="profile-caption-sub">CSE • Green University of Bangladesh</span>
      </div>
    </div>
  );
};
