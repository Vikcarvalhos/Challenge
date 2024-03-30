import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import '../css/nav.css';
import logo from '../assets/img/logo.png';

function Nav(){

    const [menu, setMenu] = useState(false);

    const openNav = () => {
        setMenu(true);
    }

    const closeNav = () => {
        setMenu(false);
    }
    
    return(
        <>
            <header>
                <nav className='nav-menu'>
                    <Link to="/"><img src={logo} alt="logo"></img></Link>
                    <button onClick={openNav} className='menu-button'><TiThMenu /></button>
                    <div className={menu ? 'overlay open' : 'overlay'}>
                    <button className='close-button' onClick={closeNav}>X</button>
                        <div id='menu' className='overlay-content'>
                            <Link to="/" onClick={closeNav} className='hover-underline'>Main</Link>
                            <Link to="/gallery" onClick={closeNav} className='hover-underline'>Gallery</Link>
                            <Link to="/howitworks" onClick={closeNav} className='hover-underline'>How It Works</Link>
                            <Link to="/concept" onClick={closeNav} className='hover-underline'>Concept</Link>
                            <Link to="/data" onClick={closeNav} className='hover-underline'>Data</Link>
                            <Link to="/prototype" onClick={closeNav} className='hover-underline'>Prototype</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav