import React from "react";
import "./navbar.css";

const Menu = () => (
  <nav>
    <ul className="navbar-menu">
      <li>
        <a href="#thesis">Thesis</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#reels">Demo Reels</a>
      </li>
      <li>
        <a href="#animation">Animation</a>
      </li>
      <li>
        <a href="#director">Director</a>
      </li>
      <li>
        <a href="#drawing">Drawing</a>
      </li>
      <li>
        <a href="#aboutme">About</a>
      </li>
    </ul>
  </nav>
);

const Navbar = () => {
  return (
    <div className="nwv2__navbar">
      <div className="nwv2__navbar-links_logo">{/* <img src={logo} /> */}</div>
      <div className="nwv2__navbar-links">
        <div className="nwv2__navbar-links_container">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
