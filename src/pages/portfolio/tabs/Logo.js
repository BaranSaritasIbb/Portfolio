import React, { useState } from "react";
import portre1 from "../../../assets/image/portre.jpg";
import portre2 from "../../../assets/image/2.jpg";
import portre3 from "../../../assets/image/3.jpg";
import portre4 from "../../../assets/image/4.jpg";
import portre5 from "../../../assets/image/5.jpg";
import portre6 from "../../../assets/image/6.jpg";
import portre7 from "../../../assets/image/7.jpg";
import portre8 from "../../../assets/image/8.jpg";
export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const imageStyle = {
    filter: isHovered ? "none" : "grayscale(100%)",
    transition: "filter 0.3s ease",
  };
  return (
    <div className="logo-body">
      <div className="logo-top-row">
        <div className="logo-grid">
          <div className=" logo-image logo-top-text">
            {!isHovered && <h1>Logolarım</h1>}
            {isHovered && <h1>{isHovered}</h1>}
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre1}
            />
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre2}
            />
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre3}
            />
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre4}
            />
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre5}
            />
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre6}
            />
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre7}
            />
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre8}
            />
          </div>
          <div className="logo-image">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={imageStyle}
              src={portre8}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
