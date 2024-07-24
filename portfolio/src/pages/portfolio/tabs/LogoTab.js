import React, { useEffect, useState } from 'react'
import portre1 from "../../../assets/image/1.jpg";
import portre2 from "../../../assets/image/2.jpg";
import portre3 from "../../../assets/image/3.jpg";
import portre4 from "../../../assets/image/4.jpg";
import portre5 from "../../../assets/image/5.jpg";
import portre6 from "../../../assets/image/6.jpg";
import portre7 from "../../../assets/image/7.jpg";

import ImageZoom from "react-image-zooom";

export default function LogoTab() {

    const [imgLink, setImgLink] = useState("");
    const [imgLinkCount, setImgLinkCount] = useState(0);

    const pixel = 1.9;
    const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 0.7)');
    const [isVisible, setIsVisible] = useState(false);

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
        // Resmin sol ve sağ kenarlarından belirli bir bölgenin renklerini kullanarak gradient oluşturur
        const getImageColors = async () => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = imgLink;

            // Resmin yüklenmesini bekler
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                context.drawImage(img, 0, 0, img.width, img.height);

                const imageData = context.getImageData(0, 0, img.width, img.height).data;
                let leftColors = { r: 0, g: 0, b: 0 };
                let rightColors = { r: 0, g: 0, b: 0 };

                // Resmin sol ve sağ kenarlarındaki belirli bölgenin genişliğini belirler
                const middleX = Math.floor(img.width / 2);

                // Her piksel için resmin sol ve sağ kenarlarındaki belirli bölgedeki renkleri toplar
                for (let y = 0; y < img.height; y++) {
                    for (let x = 0; x < img.width; x++) {
                        const index = (y * img.width + x) * 4;
                        if (x < middleX) {
                            leftColors.r += imageData[index];
                            leftColors.g += imageData[index + 1];
                            leftColors.b += imageData[index + 2];
                        } else {
                            rightColors.r += imageData[index];
                            rightColors.g += imageData[index + 1];
                            rightColors.b += imageData[index + 2];
                        }
                    }
                }

                const totalPixels = img.width * img.height ;
                // Resmin sol ve sağ kenarlarındaki belirli bölgedeki renklerin ortalamalarını hesaplar
                const leftAvgR = Math.floor(leftColors.r / totalPixels);
                const leftAvgG = Math.floor(leftColors.g / totalPixels);
                const leftAvgB = Math.floor(leftColors.b / totalPixels);
                const rightAvgR = Math.floor(rightColors.r / totalPixels);
                const rightAvgG = Math.floor(rightColors.g / totalPixels);
                const rightAvgB = Math.floor(rightColors.b / totalPixels);

                // Sol ve sağ renklerle bir linear gradient oluşturur
                setBackgroundColor(`linear-gradient(to right, rgba(${leftAvgR}, ${leftAvgG}, ${leftAvgB}, ${pixel}), rgba(${rightAvgR}, ${rightAvgG}, ${rightAvgB}, ${pixel}))`);
            };
        };

        // useEffect, bileşenin yeniden render edilmesi durumunda getImageColors fonksiyonunu çağırır
        getImageColors();
    }, [imgLink]);

    return (
        <div>
            {(isVisible && imgLink != "") ?
                <div id='portfolio-body-selected' className={(isVisible && imgLink != "") ? 'portfolio-body-selected' : 'portfolio-body-selected hidden'}>
                    <div className='portfolio-body-selected-img' style={{ background: backgroundColor }} >
                        {/* <img src={imgLink} alt="" /> */}
                        <ImageZoom className='img-portfolio' src={imgLink ? imgLink : portre4} alt="A image to apply the ImageZoom plugin" zoom="200" />
                    </div>
                    <a className="close" onClick={handleClose}></a>
                </div> : null}
            <div className='portfolio-body'>

                <div className='portfolio-line'>
                    <div onClick={() => handleImageClick(portre7, 1)} className='portfolio-line-img'>
                        <img src={portre7} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre2, 2)} className='portfolio-line-img'>
                        <img src={portre2} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre4, 3)} className='portfolio-line-img'>
                        <img src={portre4} alt="" />
                    </div>
                    <div onClick={() => handleImageClick(portre6, 4)} className='portfolio-line-img'>
                        <img src={portre6} alt="" />
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
