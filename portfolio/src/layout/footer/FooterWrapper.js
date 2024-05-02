import React from 'react'
import { FaSlash } from "react-icons/fa";
import { TbBackslash } from "react-icons/tb";

import twitterIcon from "../../assets/icons/tw.png";
import facebookIcon from "../../assets/icons/face.png";
import dribbbleIcon from "../../assets/icons/dribble.png";
import instagramIcon from "../../assets/icons/instagram.png";
import behanceIcon from "../../assets/icons/behance.png";
import { SlSocialBehance, SlSocialDribbble, SlSocialInstagram, SlSocialTwitter, SlSocialPintarest } from "react-icons/sl";

export default function FooterWrapper() {
    return (
        <div className='footer'>
            <div class="line2"></div>
            <div className='footer-top'>
                <SlSocialBehance size={50} />
                <div><TbBackslash className="custom-icon" /></div>
                <SlSocialDribbble size={50} />
                <div><TbBackslash className="custom-icon" /></div>
                <SlSocialInstagram size={50} />
                <div><TbBackslash className="custom-icon" /></div>
                <SlSocialTwitter size={50} />
                <div><TbBackslash className="custom-icon" /></div>
                <SlSocialPintarest size={50} />
            </div>
            <div class="line"></div>

        </div>
    );
}
