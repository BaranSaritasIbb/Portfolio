import React from 'react'
import { FaSlash } from "react-icons/fa";
import { TbBackslash } from "react-icons/tb";

import facebookIconL from "../../assets/icons/facebook1.svg";
import facebookIconD from "../../assets/icons/facebook2.svg";
import instaIconL from "../../assets/icons/insta1.svg";
import instaIconD from "../../assets/icons/insta2.svg";
import linkedinIconL from "../../assets/icons/linkedin1.svg";
import linkedinIconD from "../../assets/icons/linkedin2.svg";
import pinIconL from "../../assets/icons/pin1.svg";
import pinIconD from "../../assets/icons/pin2.svg";
import youtubeIconL from "../../assets/icons/youtube1.svg";
import youtubeIconD from "../../assets/icons/youtube2.svg";

import { SlSocialBehance, SlSocialDribbble, SlSocialInstagram, SlSocialTwitter, SlSocialPintarest } from "react-icons/sl";

export default function FooterWrapper(props) {
    return (

        <div className={props.showFooter ? 'show footer' : 'hide footer'} >
            <div class="line2"></div>

            {props.showFooterL ? (

                <div className='footer-top'>
                    <img src={facebookIconL} alt="" />
                    <img src={instaIconL} alt="" />
                    <img src={linkedinIconL} alt="" />
                    <img src={pinIconL} alt="" />
                    <img src={youtubeIconL} alt="" />
                </div>
            ) : props.showFooterD ? (
                <div className='footer-top'>
                    <img src={facebookIconD} alt="" />
                    <img src={instaIconD} alt="" />
                    <img src={linkedinIconD} alt="" />
                    <img src={pinIconD} alt="" />
                    <img src={youtubeIconD} alt="" />
                </div>
            ) : null}



            <div class="line"></div>

        </div>
    );
}
/*
            <facebookIconL />
                <instaIconL />
                <linkedinIconL />

                <pinIconL />
                <youtubeIconL />
                */