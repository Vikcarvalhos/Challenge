import React from 'react'
import '../css/concept.css'
import imgNull from '../assets/img/concept/image.svg'

function Concept(){

    return(
        <>
            <main id='concept'>
                <h1>Project</h1>
                <h2>Concepts</h2>
                <section className='concept-container'>
                    <div className='concept-div'>
                        <img src={imgNull} alt='image' />
                        <div className='concept-text'>
                            <h3>1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
                        </div>
                    </div>
                    <div className='concept-div-inverted'>
                        <img src={imgNull} alt='image' />
                        <div className='concept-text'>
                            <h3>2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
                        </div>
                    </div>
                    <div className='concept-div'>
                        <img src={imgNull} alt='image' />
                        <div className='concept-text'>
                            <h3>3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Concept