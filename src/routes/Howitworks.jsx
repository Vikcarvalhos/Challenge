import React from 'react';
import '../css/howitworks.css';
import imgNull from '../assets/img/howitworks/image.svg';
import pythonProt from '../assets/img/howitworks/python.jpg';
import { GoArrowRight } from "react-icons/go";

function Howitworks(){

    return(
        <>
            <main id='how-it-works'>
                <h1>How it</h1>
                <h2>Works</h2>
                <section className='work-container'>
                    <div className='work-method'>
                        <img src={pythonProt} alt='image' />
                        <div className='work-text'>
                            <h3>Python</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus iste delectus reprehenderit officia tempore repellat, nam iusto nesciunt sit quasi eaque! Laboriosam illo at eaque esse suscipit earum sunt!</p>
                            <a className='work-btn' href='#'>View More <span><GoArrowRight /></span></a>
                        </div>
                    </div>
                    <div className='work-method'>
                        <img src={imgNull} alt='image' />
                        <div className='work-text'>
                            <h3>Step 2</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam rerum dignissimos corporis explicabo, velit dolorem ut odit sunt autem placeat itaque saepe maxime. Impedit sequi nobis soluta, eos modi eligendi?</p>
                            <a className='work-btn' href='#'>View More <span><GoArrowRight /></span></a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Howitworks