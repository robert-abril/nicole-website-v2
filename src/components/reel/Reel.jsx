import React from "react";
import "./reel.css";

const Reel = ({ title, description, url }) => {
  return (
    <div className="nmv2__reel-container__reel">
      <h3 className="nmv2__reel-container__reel-title">{title}</h3>
      <iframe
        title={title}
        src={url}
        width="800"
        height="400"
        frameborder="0"
      ></iframe>
      <div className="nmv2__reel-container__reel-description">
        {description}
      </div>
    </div>
  );
};

export default Reel;
