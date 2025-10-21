import React from "react";
import "./aboutme.css";
import aboutMePic from "../../assets/Nicole-about-me-pic.avif";

const Aboutme = () => {
  return (
    <div>
      <div id="aboutme" className="aboutme-container">
        <img className="aboutme-picture" src={aboutMePic} alt="aboutMe"></img>
        <div className="aboutme-content">
          <div className="aboutme-title">A little about me!</div>
          <div className="aboutme-bio">
            <p>
              Hey there! I'm senior 3D Animator based in NYC. I have hands-on
              animating and directing experience. At Noggin, I took on the lead
              role for a variety of projects, but I'm not afraid to get my hands
              dirty with some animating of my own!
            </p>
            <p>
              I've worked at a variety of studios in the past like Paramount's
              Noggin, Rooster Teeth (in Austin, TX), and Nathan Love!
            </p>
            <p>I also do story boarding and concept art!</p>
            <p>
              I graduated from the School of Visual Arts as a Computer Arts
              Major with highest honors and the Rhodes Award in May 2016. My
              thesis film, True Colors, won the Outstanding Achievement Award,
              and it has been a finalist in several festivals, including Cannes
              Film Festival's American Pavilion, and Nagoya International Film
              Festival.
            </p>
            <p>
              Don't even get me started on Star Trek. Just kidding - please talk
              to me about Star Trek.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
