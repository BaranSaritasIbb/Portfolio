import React, { useRef, useState, useEffect } from 'react';
import portreUx1 from "../../../assets/image/ux/ux1.png";
import portreUx2 from "../../../assets/image/ux/ux2.png";
import portreUx3 from "../../../assets/image/ux/ux3.png";

export default function UxUi() {
    const [hovered, setHovered] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const [projectName, setProjectName] = useState("");
    const timeoutRef = useRef(null);

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
            const offsetTop = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (projectName) {
            scrollToDiv();
        }
    }, [projectName]);

    const handleImageClick = (projectName) => {
        setProjectName(projectName);
        if (!isVisible) {
            setTimeout(() => {
                setIsVisible(true);
            }, 200);
        } else {
            setIsVisible(true);
        }
    };

    return (
        <div id='carx' className='ui-line'>
            {projectName && <h2>{projectName}</h2>}
            {isVisible && projectName && (
                <div  className="card">
                    <p onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                        {hovered[1] ? <img src={portreUx1} alt="Image 1" /> : <span>1</span>}
                    </p>
                    <p onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                        {hovered[2] ? <img src={portreUx2} alt="Image 2" /> : <span>2</span>}
                    </p>
                    <p onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
                        {hovered[3] ? <img src={portreUx3} alt="Image 3" /> : <span>3</span>}
                    </p>
                </div>
            )}

            <div className='ux-items'>
                <div onClick={() => handleImageClick("Mahalgo")} className="container noselect">
                    <div className="canvas">
                        {/* Your canvas content */}
                        <div id="card">
                            <p id="prompt">MahalGo</p>
                            <div className="title">İnşaat Firması projesi</div>
                        </div>
                    </div>
                </div>
                <div onClick={() => handleImageClick("iz")} className="container noselect">
                    <div className="canvas">
                        {/* Your canvas content */}
                        <div id="card">
                            <p id="prompt">MahalGo</p>
                            <div className="title">İnşaat Firması projesi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
