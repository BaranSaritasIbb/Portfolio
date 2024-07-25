import React, { useEffect, useState } from "react";
import FooterWrapper from "../layout/footer/FooterWrapper";
import AppRoutes from "../routing/AppRoutes";
import { FaUserAstronaut } from "react-icons/fa";

export default function Layout() {
  const [showFooterD, setShowFooterD] = useState(false);
  const [showFooterL, setShowFooterL] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isAtTop = scrollTop === 0;
      const isAtBottom = window.innerHeight + scrollTop >= document.body.offsetHeight;

      if (isAtTop || isAtBottom) {
        if (isAtBottom) {
          setShowFooter(true);
          setShowFooterL(true);
        } else if (isAtTop) {
          setShowFooterD(true);
          setShowFooter(true);
        }
      } else {
        setShowFooterD(false);
        setShowFooterL(false);
        setShowFooter(false);
      }

      const sections = document.querySelectorAll(".section");
      let current = null;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollTop >= sectionTop - 500 && scrollTop < sectionTop + sectionHeight - 500) {
          current = section;
        }
      });

      if (current) {
        console.log(current.getAttribute("id"));
        setCurrentSection(current.getAttribute("id"));
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the correct section on page load
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="layout-body">
      <Sidebar currentSection={currentSection} />
      
      <div  className="layout-body-pages section">

    
      <AppRoutes props={currentSection}/>
   
      </div>
      <FooterWrapper
          showFooter={showFooter}
          showFooterD={showFooterD}
          showFooterL={showFooterL}
        />
    </div>
  );
}

function Sidebar({ currentSection }) {
  const sections = [
    { id: "header", name: "person-promotion" },
    { id: "portfolio-div", name: "portfolio-div" },
    { id: "ux-ui", name: "ux-ui" },
    { id: "deneme2", name: "Deneme 2" }
  ];

  return (
    <div className="layout-sidebar">
      {sections.map((section) => (
        <FaUserAstronaut
          key={section.id}
          size={60}
          onClick={() => handleSideBarClick(section.id)}
          color={currentSection === section.id ? "green" : "black"}
        />
      ))}
    </div>
  );
}

const handleSideBarClick = (id) => {
  scrollToDiv(id);
};

const scrollToDiv = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
