import React from "react";
import { Reel } from "../../components";
import "./reels.css";

const displayReels = [
  {
    title: "3D Animation Reel",
    description:
      "My animation reel of 2024! Including works for Pokemon (Nathan Love), RWBY (RoosterTeeth), and various Nick JR IPs!",
    url: "https://player.vimeo.com/video/563790642?h=a7dbeaa794",
  },
  {
    title: "Animation Director Reel",
    description:
      "Some projects I directed the animation for during my time at Noggin. I led a team of animators, and animated a few shots myself!",
    url: "https://player.vimeo.com/video/917695556?h=1d0a800fed",
  },
  {
    title: "RWBY Season 6 Animation Reel",
    description:
      "A super cut of all the shots I worked on in RWBY Season 6 for Rooster Teeth, in chronological order.",
    url: "https://player.vimeo.com/video/320858802?h=6dfd859b17",
  },
];

const Reels = () => {
  return (
    <div className="nmv2__reels-container">
      {displayReels.map((reel, index) => (
        <Reel
          key={index}
          title={reel.title}
          description={reel.description}
          url={reel.url}
        />
      ))}
    </div>
  );
};

export default Reels;
