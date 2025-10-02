import React from "react";

const Reel = ({ title, description, url }) => {
  return (
    <div className="nmv2__reel-contianer__reel">
      <div className="nmv2__reel-container__reel-title">
        <h3>{title}</h3>
      </div>
      <iframe
        title={title}
        src={url}
        width="800"
        height="400"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="nmv2__reel-container__reel-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Reel;
