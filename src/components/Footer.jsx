import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { GoLocation } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import logo from '../assets/img/footer/logo.png'
import '../css/footer.css';

function Footer(){

    return(
        <>
            <footer>
                <img src={logo}></img>
                <div className='footer-information'>
                    <p>Information</p>
                    <div className='footer-links'>
                        <Link to="/" className='hover-underline'>Main</Link>
                        <Link to="/gallery" className='hover-underline'>Gallery</Link>
                        <Link to="/howitworks" className='hover-underline'>How It Works</Link>
                        <Link to="/concept" className='hover-underline'>Concept</Link>
                        <Link to="/data" className='hover-underline'>Data</Link>
                        <Link to="/prototype" className='hover-underline'>Prototype</Link>
                    </div>
                </div>
                <div className='footer-contacts'>
                    <p>Contacts</p>
                    <div className='footer-contacts-text'>

                        <p><GoLocation /> 1234 Sample Street Austin Texas 78704</p>
                        <p><FaPhoneAlt /> 512.333.2222</p>
                        <p><GoMail /> sampleemail@gmail.com</p>
                    </div>
                </div>
                <div className='footer-social'>
                    <p>Social Media</p>
                    <div className='social-medias'>
                        <a href='#'><FaFacebookF /></a>
                        <a href='#'><BsTwitterX /></a>
                        <a href='#'><FaLinkedin /></a>
                        <a href='#'><FaPinterestP /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer