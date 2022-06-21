import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <div className="s-title-box">
        <span>{subTitle}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
