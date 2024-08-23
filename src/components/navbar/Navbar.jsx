import React from "react";
import "./navbar.css";
import logo from "../../assets/Nicole-princess-banner.png";

const Menu = () => (
  <>
    <p>
      <a href="#aboutme">About Me</a>
    </p>
    <p>
      <a href="#thesis">Thesis</a>
    </p>
    <p>
      <a href="#reels">Demo Reels</a>
    </p>
    <p>
      <a href="#resume">Resume</a>
    </p>
  </>
);

const Navbar = () => {
  return (
    <div className="nwv2__navbar">
      <div className="nwv2__navbar-links_logo">
        <img src={logo} />
      </div>
      <div className="nwv2__navbar-links">
        <div className="nwv2__navbar-links_container">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
