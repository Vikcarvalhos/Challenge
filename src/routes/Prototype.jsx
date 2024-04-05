import React from 'react'
import '../css/prototype.css'
import rectImg from '../assets/img/prototype/1.svg'
import sqrImg from '../assets/img/prototype/2.svg'

function Prototype(){

    return(
        <>
            <main id='prototype'>
                <h1>Problem</h1>
                <h2>Data</h2>
                <section className='prototype-content'>
                    <img src={rectImg} alt='rectangle' className='prototype-img'/>
                    <div className='prototype-text'>
                        <img src={sqrImg} alt='square' className='prototype-img'/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod porro recusandae dolores optio. 
                            Iusto ipsa porro animi optio? Nemo ducimus dolore ipsa cumque quis iusto adipisci nam veniam ipsam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum blanditiis placeat voluptates distinctio accusamus 
                            fuga nemo adipisci! Eius maiores soluta facere quae laudantium, exercitationem, illo saepe praesentium, 
                            doloremque asperiores ipsam!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora repellendus totam quae provident distinctio unde, 
                            reiciendis qui atque nulla modi vero recusandae, fugit omnis placeat quisquam doloribus ipsam consectetur. Rerum.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Prototype