import React, { useState } from 'react'
import portreUx1 from "../../../assets/image/ux/ux1.png";
import portreUx2 from "../../../assets/image/ux/ux2.png";
import portreUx3 from "../../../assets/image/ux/ux3.png";
export default function UxUi() {
    const [hovered, setHovered] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const [projectName, setProjectName] = useState("");
    const handleMouseEnter = (index) => {
        const newHovered = {};
        newHovered[index] = true;
        setHovered(newHovered);
    };
    const handleClose = () => {
        setIsVisible(false);
    };
    const handleMouseLeave = (index) => {
        setHovered({ ...hovered, [index]: false });
    };
    const scrollToDiv = () => {
        const element = document.getElementById('carx');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleImageClick = (projectName) => {
        setProjectName(projectName);
        scrollToDiv();
        if (isVisible == false) {
            setTimeout(() => {
                setIsVisible(true);
            }, 200);
        }
        else {
            setIsVisible(true);
        }

    };
    return (
        <div id='carx' className='ui-line'>

            {projectName != "" ? <h2>{projectName}</h2> : null}
            {(isVisible && projectName != "") ?
                <div className="card">
                    <p
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                    >
                        {hovered[1] ? <img src={portreUx1} alt="Image 1" /> : <span>1</span>}
                    </p>
                    <p
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                    >
                        {hovered[2] ? <img src={portreUx2} alt="Image 2" /> : <span>2</span>}
                    </p>
                    <p
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={() => handleMouseLeave(3)}
                    >
                        {hovered[3] ? <img src={portreUx3} alt="Image 3" /> : <span>3</span>}
                    </p>

                </div> : null}



            <div className='ux-items'>

                <div onClick={() => handleImageClick("Mahalgo")} class="container noselect">
                    <div class="canvas">
                        <div class="tracker tr-1"></div>
                        <div class="tracker tr-2"></div>
                        <div class="tracker tr-3"></div>
                        <div class="tracker tr-4"></div>
                        <div class="tracker tr-5"></div>
                        <div class="tracker tr-6"></div>
                        <div class="tracker tr-7"></div>
                        <div class="tracker tr-8"></div>
                        <div class="tracker tr-9"></div>
                        <div class="tracker tr-10"></div>
                        <div class="tracker tr-11"></div>
                        <div class="tracker tr-12"></div>
                        <div class="tracker tr-13"></div>
                        <div class="tracker tr-14"></div>
                        <div class="tracker tr-15"></div>
                        <div class="tracker tr-16"></div>
                        <div class="tracker tr-17"></div>
                        <div class="tracker tr-18"></div>
                        <div class="tracker tr-19"></div>
                        <div class="tracker tr-20"></div>
                        <div class="tracker tr-21"></div>
                        <div class="tracker tr-22"></div>
                        <div class="tracker tr-23"></div>
                        <div class="tracker tr-24"></div>
                        <div class="tracker tr-25"></div>
                        <div id="card">
                            <p id="prompt"> MahalGo</p>
                            <div class="title">İnşaat Firması projesi</div>
                            {/* <div class="subtitle">
                            MahalGo
                        </div> */}

                        </div>
                    </div>
                </div>
                <div onClick={() => handleImageClick("iz")} class="container noselect">
                    <div class="canvas">
                        <div class="tracker tr-1"></div>
                        <div class="tracker tr-2"></div>
                        <div class="tracker tr-3"></div>
                        <div class="tracker tr-4"></div>
                        <div class="tracker tr-5"></div>
                        <div class="tracker tr-6"></div>
                        <div class="tracker tr-7"></div>
                        <div class="tracker tr-8"></div>
                        <div class="tracker tr-9"></div>
                        <div class="tracker tr-10"></div>
                        <div class="tracker tr-11"></div>
                        <div class="tracker tr-12"></div>
                        <div class="tracker tr-13"></div>
                        <div class="tracker tr-14"></div>
                        <div class="tracker tr-15"></div>
                        <div class="tracker tr-16"></div>
                        <div class="tracker tr-17"></div>
                        <div class="tracker tr-18"></div>
                        <div class="tracker tr-19"></div>
                        <div class="tracker tr-20"></div>
                        <div class="tracker tr-21"></div>
                        <div class="tracker tr-22"></div>
                        <div class="tracker tr-23"></div>
                        <div class="tracker tr-24"></div>
                        <div class="tracker tr-25"></div>
                        <div id="card">
                            <p id="prompt"> MahalGo</p>
                            <div class="title">İnşaat Firması projesi</div>
                            {/* <div class="subtitle">
                            MahalGo
                        </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
