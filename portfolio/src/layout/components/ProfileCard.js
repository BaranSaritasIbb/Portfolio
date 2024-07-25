import React, { useEffect } from "react";

export default function ProfileCard({currentSection}) {

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    let current = null;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop - 10 && scrollTop < sectionTop + sectionHeight - 10) {
        current = section;
      }
    });

    if (current) {
      console.log("Current Section:", current.getAttribute("id"));
    }
  }, [currentSection]);
  return (
    <div  className="profile-body">
      <div  className="header">
        <h1 className="header-title"> Baran Sarıtaş</h1>
      </div>
      <div class="box-profile">
        <div class="elements bg"></div>
        <div class="elements imgBx">
          <img src="https://github.com/Khyes/image_dump/blob/main/02.png?raw=true" />
        </div>
        <div class="elements name">
          <h2>Someone Famous</h2>
        </div>
        <div class="elements content">
          <p>
            Te alios cetero est Epicuri inquam video igitur quidem equidem De
            quas equidem aut instructior appellantur ipse non tenent video.
          </p>
        </div>
        <div class="card-profile"></div>
      </div>
    </div>
  );
}
