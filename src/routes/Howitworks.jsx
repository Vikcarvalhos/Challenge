import React from 'react'
import '../css/howitworks.css'
import imgNull from '../assets/img/howitworks/image.svg'
import { GoArrowRight } from "react-icons/go";

function Howitworks(){

    return(
        <>
            <main id='how-it-works'>
                <h1>How it</h1>
                <h2>Works</h2>
                <section className='work-container'>
                    <div className='work-method'>
                        <img src={imgNull} alt='image' />
                        <div className='work-text'>
                            <h3>Step 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus iste delectus reprehenderit officia tempore repellat, nam iusto nesciunt sit quasi eaque! Laboriosam illo at eaque esse suscipit earum sunt!</p>
                            <button className='work-btn'>View More <span><GoArrowRight /></span></button>
                        </div>
                    </div>
                    <div className='work-method'>
                        <img src={imgNull} alt='image' />
                        <div className='work-text'>
                            <h3>Step 2</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam rerum dignissimos corporis explicabo, velit dolorem ut odit sunt autem placeat itaque saepe maxime. Impedit sequi nobis soluta, eos modi eligendi?</p>
                            <button className='work-btn'>View More <span><GoArrowRight /></span></button>
                        </div>
                    </div>
                    <div className='work-method'>
                        <img src={imgNull} alt='image' />
                        <div className='work-text'>
                            <h3>Step 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, sunt animi? Eligendi error mollitia beatae, reprehenderit tempora laborum ullam odio, blanditiis perferendis aut quasi numquam dignissimos, hic enim. Corporis, id!</p>
                            <button className='work-btn'>View More <span><GoArrowRight /></span></button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Howitworks