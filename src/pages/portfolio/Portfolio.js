import React, { useEffect, useState } from "react";

import ImageZoom from "react-image-zooom";
import LogoTab from "./tabs/LogoTab";
import UxUi from "./tabs/UxUi";
export default function Portfolio({currentSection}) {
  const [imgLink, setImgLink] = useState("");
  const [imgLinkCount, setImgLinkCount] = useState(0);

  const pixel = 1.9;
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 255, 255, 0.7)"
  );
  const [isVisible, setIsVisible] = useState(true);
  const [hovered, setHovered] = useState({});
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  useEffect(() => {
    console.log(backgroundColor);
  }, [backgroundColor]);

  useEffect(() => {
    if (activeTab == null) {
      setActiveTab(0);
    }
  }, []);

  const scrollToDiv = () => {
    const element = document.getElementById("portfolio-body-selected");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div  className="portfolio">
      <h1> Portfolio</h1>

      <div className="portfolio-body">
        <LogoTab />
        
      </div>
    </div>
  );
}
