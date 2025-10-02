import React from "react";
import logo from "../../assets/Nicole-princess-banner.png";
import "./header.css";

const Header = () => {
  return (
    <div className="nmv2__header" id="home">
      <h1> Nicole Morciniec</h1>
      <img src={logo} alt="logo" />
      <div className="nmv2__header-titles">
        <p>Senior 3D Animator</p>
        <p>Animation Director</p>
        <p>2D Artist</p>
        <p>Educator</p>
      </div>
    </div>
  );
};

export default Header;
