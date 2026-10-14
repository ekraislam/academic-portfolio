import React from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  lead?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  lead,
  id,
}) => {
  return (
    <div className="section-header">
      <span className="section-label">{label}</span>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
};
