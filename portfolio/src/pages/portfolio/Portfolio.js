import React, { useEffect, useState } from 'react'
import portre1 from "../../assets/image/1.jpg";
import portre2 from "../../assets/image/2.jpg";
import portre3 from "../../assets/image/3.jpg";
import portre4 from "../../assets/image/4.jpg";
import portre5 from "../../assets/image/5.jpg";
import ImageZoom from "react-image-zooom";
export default function Portfolio() {

    const [imgLink, setImgLink] = useState("");
    const [imgLinkCount, setImgLinkCount] = useState(0);


    const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 0.7)');
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
    };
    const handleImageClick = (newImgLink, count) => {
        setImgLink(newImgLink);
        setImgLinkCount(count);
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

    const scrollToDiv = () => {
        const element = document.getElementById('portfolio-body-selected');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const getImageColors = async () => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = imgLink;

            img.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                context.drawImage(img, 0, 0, img.width, img.height);

                const imageData = context.getImageData(0, 0, img.width, img.height).data;
                let r = 0, g = 0, b = 0;

                for (let i = 0; i < imageData.length; i += 4) {
                    r += imageData[i];
                    g += imageData[i + 1];
                    b += imageData[i + 2];
                }

                r = Math.floor(r / (imageData.length / 4));
                g = Math.floor(g / (imageData.length / 4));
                b = Math.floor(b / (imageData.length / 4));

                setBackgroundColor(`rgba(${r}, ${g}, ${b}, 0.9)`);
            };
        };

        getImageColors();
    }, [imgLink]);

    return (
        <div className='portfolio'>
            <h1> Portfolio</h1>

            <div id='portfolio-body-selected' className={(isVisible && imgLink) ? 'portfolio-body-selected' : 'portfolio-body-selected hidden'}>
                <div className='portfolio-body-selected-img' style={{ backgroundColor: backgroundColor }}>
                    {/* <img src={imgLink} alt="" /> */}
                    <ImageZoom className='img-portfolio' src={imgLink ? imgLink : portre4} alt="A image to apply the ImageZoom plugin" zoom="200" />
                </div>
                <a className="close" onClick={handleClose}></a>

            </div>
            <div className='portfolio-body'>

                <div className='portfolio-line'>
                    <div onClick={() => handleImageClick(portre1, 1)} className='portfolio-line-img'>
                        <img src={portre1} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre2, 2)} className='portfolio-line-img'>
                        <img src={portre2} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre4, 3)} className='portfolio-line-img'>
                        <img src={portre4} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre3, 4)} className='portfolio-line-img'>
                        <img src={portre3} alt="" />
                    </div>
                </div>
                <div className='portfolio-line'>
                    <div onClick={() => handleImageClick(portre4, 5)} className='portfolio-line-img'>
                        <img src={portre4} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre3, 6)} className='portfolio-line-img'>
                        <img src={portre3} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre5, 7)} className='portfolio-line-img'>
                        <img src={portre5} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre4, 8)} className='portfolio-line-img'>
                        <img src={portre4} alt="" />
                    </div>
                </div>
                <div className='portfolio-line'>
                    <div onClick={() => handleImageClick(portre4, 9)} className='portfolio-line-img'>
                        <img src={portre4} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre1, 10)} className='portfolio-line-img'>
                        <img src={portre1} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre2, 11)} className='portfolio-line-img'>
                        <img src={portre2} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre3, 12)} className='portfolio-line-img'>
                        <img src={portre3} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
