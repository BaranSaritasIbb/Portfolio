import React, { useEffect, useState } from 'react'


import ImageZoom from "react-image-zooom";
import LogoTab from './tabs/LogoTab';
import UxUi from './tabs/UxUi';
export default function Portfolio() {

    const [imgLink, setImgLink] = useState("");
    const [imgLinkCount, setImgLinkCount] = useState(0);

    const pixel = 1.9;
    const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 0.7)');
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
                const middleX = Math.floor(img.width / 6);

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

                const totalPixels = img.width * img.height;
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
        <div className='portfolio'>
            <h1> Portfolio</h1>

            <div className='portfolio-body'>

                <div>
                    <div className="tab-list">

                        <button key={0}
                            className={0 === activeTab ? 'active-tab buttonx buttonx-4' : 'buttonx buttonx-4'}
                            onClick={() => handleTabClick(0)} class="buttonx buttonx-4">

                            Logo
                        </button>
                        <button key={1}
                            className={1 === activeTab ? 'active-tab buttonx buttonx-4' : 'buttonx buttonx-4'}
                            onClick={() => handleTabClick(1)} class="buttonx buttonx-4">

                            UX UI
                        </button>
                        <button key={2}
                            className={2 === activeTab ? 'active-tab buttonx buttonx-4' : 'buttonx buttonx-4'}
                            onClick={() => handleTabClick(2)} class="buttonx buttonx-4">

                            Reklam
                        </button>


                    </div>


                    < div className="tab-content">
                        <div style={{ display: activeTab === 0 ? 'block' : 'none' }}>   <LogoTab /> </div>
                        <div style={{ display: activeTab === 1 ? 'block' : 'none' }}> <UxUi /></div>
                        <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>Tab 3 Content</div>
                    </div>
                </div>

            </div>
        </div >
    )
}
