import React, { useState, useEffect } from "react";
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
  const [isHoveredCompanyName, setIsHoveredCompanyName] = useState("");
  const [currentCompanyName, setCurrentCompanyName] = useState("");
  const [imageId, setImageId] = useState(0);


  useEffect(() => {
    if (isHoveredCompanyName) {
      setCurrentCompanyName(isHoveredCompanyName);
    }
  }, [isHoveredCompanyName, imageId]);

  const handleMouseEnter = (name, id) => {
    setIsHoveredCompanyName(name);
    setImageId(id);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsHoveredCompanyName("");
    setImageId(0);
  };

  const images = [
    { id: 1, imagePath: portre1, companyName: "Google", fontColor: "#4285F4" },
    { id: 2, imagePath: portre1, companyName: "Microsoft", fontColor: "#F25022" },
    { id: 3, imagePath: portre1, companyName: "Apple", fontColor: "#A2AAAD" },
    { id: 4, imagePath: portre1, companyName: "Amazon", fontColor: "#FF9900" },
    { id: 5, imagePath: portre1, companyName: "Facebook", fontColor: "#1877F2" },
    { id: 6, imagePath: portre1, companyName: "Tesla", fontColor: "#CC0000" },
    { id: 7, imagePath: portre1, companyName: "Netflix", fontColor: "#E50914" },
    { id: 8, imagePath: portre1, companyName: "IBM", fontColor: "#054ADA" },
  ];
  
  const currentCompany = images.find(
    (company) => company.companyName === currentCompanyName
  );
  return (
    <div className="logo-body">
      <div className="logo-top-row">
        <div className="logo-grid">
          <div className="logo-image logo-top-text">
            {!isHovered && <h1 className="fade-in">Logolarım</h1>}
            {isHovered != "" && imageId != 0 && (
              <>
              {currentCompany&&
                <h1
                  className="fade-out"
                  style={{ color: currentCompany.fontColor }}
                >
                  {currentCompanyName}
                </h1>
}
                {/* <h1 className="fade-in">{isHoveredCompanyName}</h1> */}
              </>
            )}
          </div>
          {images.map((item) => (
            <div className="logo-image" key={item.id}>
              <img
                onMouseEnter={() => handleMouseEnter(item.companyName, item.id)}
                onMouseLeave={handleMouseLeave}
                src={item.imagePath}
                id={item.id}
                alt={item.companyName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
