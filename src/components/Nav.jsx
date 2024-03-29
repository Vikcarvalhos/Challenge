import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import bootstrap from 'bootstrap'
import '../css/nav.css'
import logo from '../assets/img/logo.png'
import menu from '../assets/img/menu.svg'

function Nav(){

    function openNav(){
        
    }

    function closeNav(){

    }

    return(
        <>
            <header>
                <nav className='nav-menu'>
                    <Link to="/"><img src={logo} alt="logo"></img></Link>
                    <button className='menu-button' onClick={openNav}><i href={menu} alt='menu'></i></button>
                    <div className='overlay'>
                        <button className='close-button' onClick={closeNav}>X</button>
                        <div id='menu' className='overlay-content'>
                            <Link to="/">Main</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/howitworks">How It Works</Link>
                            <Link to="/concept">Concept</Link>
                            <Link to="/data">Data</Link>
                            <Link to="/prototype">Prototype</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav