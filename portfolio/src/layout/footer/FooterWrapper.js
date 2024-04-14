import React from 'react'
import { FaSlash } from "react-icons/fa";
import twitterIcon from "../../assets/icons/tw.png";
import facebookIcon from "../../assets/icons/face.png";
import dribbbleIcon from "../../assets/icons/dribble.png";
import instagramIcon from "../../assets/icons/instagram.png";
import behanceIcon from "../../assets/icons/behance.png";

export default function FooterWrapper() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <img className='twitter' src={twitterIcon} alt="Twitter" />

                <FaSlash className="custom-icon" />

                <img className='facebook' src={facebookIcon} alt="Facebook" />

                <div><FaSlash className="custom-icon" /></div>

                <img className='instagram' src={instagramIcon} alt="Instagram" />

                <div><FaSlash className="custom-icon" /></div>

                <img className='dribbble' src={dribbbleIcon} alt="Dribbble" />

                <div><FaSlash className="custom-icon" /></div>

                <img className='behance' src={behanceIcon} alt="Behance" />
            </div>

            <div className='footer-under'>
                <div>Copyright @ 2024. All Rights Reserved. </div>
            </div>
        </div>
    );
}
