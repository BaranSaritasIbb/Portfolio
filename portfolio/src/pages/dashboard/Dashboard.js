import React from 'react'
import portre from "../../assets/image/portre.jpg";
import Portfolio from '../portfolio/Portfolio';
import ImageZoom from "react-image-zooom";
import ProfileCard from '../../layout/components/ProfileCard';

export default function DashboardPage() {
    // props.showFooter


    return (
        <div className='dashboard'>

            <div className='person-promotion'>

                <div className='person-image'>
                    <ProfileCard />
                    {/* <img src={portre} alt="" /> */}

                    {/* <ImageZoom className='img-dashboard' src={portre} alt="A image to apply the ImageZoom plugin" zoom="200" /> */}

                </div>

            </div>
            <div className='portfolio-div'  >
                <Portfolio />
            </div>
        </div>
    )
}
