import React, { useEffect } from 'react';
import portre from "../../assets/image/portre.jpg";
import Portfolio from '../portfolio/Portfolio';
import ImageZoom from "react-image-zooom";
import ProfileCard from '../../layout/components/ProfileCard';
import UxUi from '../portfolio/tabs/UxUi';
import Logo from '../portfolio/tabs/Logo';

export default function DashboardPage({ currentSection }) {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    let current = null;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop - 50 && scrollTop < sectionTop + sectionHeight - 50) {
        current = section;
      }
    });

    if (current) {
      console.log("Current Section:", current.getAttribute("id"));
    }
  }, [currentSection]);

  return (
    <div className='dashboard'>
      <div id="header" className='person-promotion section'>
     
                        
        <div className='person-image'>
          <ProfileCard />
        </div>
      </div>
      <div id="portfolio-div" className='portfolio-div section'>
        <Portfolio />
      </div>

      <div id= "ux-ui" className='portfolio-ux section'>
      <h1> UX / UI</h1>

        <UxUi />
      </div>
      
      <div id= "Logo" className='logos section'>
      <h1> Logo</h1>

        <Logo />
      </div>
    </div>
  );
}
