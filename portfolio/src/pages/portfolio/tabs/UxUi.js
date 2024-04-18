import React, { useState } from 'react'
import portreUx1 from "../../../assets/image/ux/ux1.png";
import portreUx2 from "../../../assets/image/ux/ux2.png";
import portreUx3 from "../../../assets/image/ux/ux3.png";
export default function UxUi() {
    const [hovered, setHovered] = useState({});
    const handleMouseEnter = (index) => {
        const newHovered = {};
        newHovered[index] = true;
        setHovered(newHovered);
    };

    const handleMouseLeave = (index) => {
        setHovered({ ...hovered, [index]: false });
    };

    return (
        <div className='ui-line'>
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
            </div>
        </div>
    )
}
