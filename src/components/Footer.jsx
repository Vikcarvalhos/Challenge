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
                    <p>Informações</p>
                    <div className='footer-links'>
                        <Link to="/" className='hover-underline'>Nosso projeto</Link>
                        <Link to="/gallery" className='hover-underline'>Consulta</Link>
                        <Link to="/howitworks" className='hover-underline'>Como funciona</Link>
                        <Link to="/concept" className='hover-underline'>Conceito</Link>
                        <Link to="/data" className='hover-underline'>Dados</Link>
                        <Link to="/prototype" className='hover-underline'>Protótipo</Link>
                    </div>
                </div>
                <div className='footer-contacts'>
                    <p>Cantatos</p>
                    <div className='footer-contacts-text'>

                        <p><GoLocation /> Av. Paulista, 1106 - 7º andar - Cerqueira César São Paulo/SP</p>
                        <p><FaPhoneAlt /> +55 11 3385 8010</p>
                        <p><GoMail /> atendimento@fiap.com.br</p>
                    </div>
                </div>
                <div className='footer-social'>
                    <p>Redes Sociais</p>
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