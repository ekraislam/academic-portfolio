import React from "react";
import { UserCheck } from "lucide-react";
import "./ProfilePhotoPlaceholder.css";

interface ProfilePhotoProps {
  photoUrl?: string | null;
  name?: string;
}

export const ProfilePhotoPlaceholder: React.FC<ProfilePhotoProps> = ({
  photoUrl = null,
  name = "Ekra Islam Ohi",
}) => {
  const [hasError, setHasError] = React.useState(false);

  if (photoUrl && !hasError) {
    return (
      <div className="profile-frame" aria-label={`Academic portrait of ${name}`}>
        <div className="profile-image-container">
          <img
            src={photoUrl}
            alt={`Academic portrait of ${name}`}
            className="profile-photo"
            loading="eager"
            width="270"
            height="270"
            onError={() => setHasError(true)}
          />
        </div>
        <div className="profile-caption">
          <div className="profile-caption-status">
            <UserCheck size={14} className="caption-icon" aria-hidden="true" />
            <span className="profile-caption-name">{name}</span>
          </div>
          <span className="profile-caption-sub">B.Sc. in CSE • Green University of Bangladesh</span>
          <span className="profile-caption-focus">AI/ML &amp; Systems Engineering</span>
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
        <span className="profile-caption-sub">B.Sc. in CSE • Green University of Bangladesh</span>
        <span className="profile-caption-focus">AI/ML &amp; Systems Engineering</span>
      </div>
    </div>
  );
};
