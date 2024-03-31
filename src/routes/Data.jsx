import React from 'react'
import '../css/data.css'
import map from '../assets/img/data/1.svg'

function Data(){

    return(
        <>
            <main id='data'>
                <section className='data-content'>
                    <div className='data-text'>
                        <div className='data-title'>
                            <h1>Problem</h1>
                            <h2>Data</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laboriosam quod porro recusandae dolores optio. 
                            Iusto ipsa porro animi optio? Nemo ducimus dolore ipsa cumque quis iusto adipisci nam veniam ipsam.
                            </p>
                        <button className='data-btn'>Research</button>
                    </div>
                    <img src={map} alt='map' className='data-img'/>
                </section>
            </main>
        </>
    )
}

export default Data