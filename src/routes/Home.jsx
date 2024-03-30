import '../css/home.css'
import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react';
import maproute from '../assets/img/home/maproute.gif';
import phonelocation from '../assets/img/home/phonelocation.gif';
import step1 from '../assets/img/home/step1.svg';
import step2 from '../assets/img/home/step2.svg';
import step3 from '../assets/img/home/step3.svg';
import { GoArrowRight } from "react-icons/go";

function Home() {
  const images = [
    phonelocation,
    maproute,
    // Add more image URLs as needed
  ];

  const texts = [
    'O mapa do seu local favorito na palma de sua mão!',
    'Um jeito divertido de ir ao seu destino!',
    // Add more texts as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
  
    // Cleanup function to clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  return (
    <>
      <main>

        <section className='our-project'>
          <motion.div
            className='our-project-text'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
            <h1>Our</h1>
            <h2>Project</h2>
            </div>
            <p>
              {texts[currentIndex]}
            </p>
          </motion.div>
          <motion.div
            className='our-project-image'
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ duration: 1 , delay: 0.5}}
          >
            <motion.img 
              src={images[currentIndex]} 
              alt='carousel'
              key={currentIndex} // Add a key to trigger the animation on change
              initial={{ opacity: 0 }} // Start with an opacity of 0
              animate={{ opacity: 1 }} // Animate to an opacity of 1
              transition={{ duration: 3 }} // Over a duration of 3 second
            />
          </motion.div>
        </section>

        <section className='steps'>
          <div className='step-images'>
            <img src={step1} className='step1'></img>
            <div className='step-images-div'>
              <img src={step2} className='step2'></img>
              <img src={step3} className='step3'></img>
            </div>
          </div>
          <div className='step-text'>
            <h2>Steps</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere voluptatum quo et necessitatibus corrupti culpa magni eligendi omnis? At, reiciendis! Omnis at voluptate laudantium eaque sit molestiae blanditiis recusandae?</p>
            <button className='step-button'>Read More<GoArrowRight /></button>
          </div>
        </section>

        <section className='main-focus'>
          <h2>Foco Principal</h2>
          <div className='main-focus-container'>
            <div className='main-focus-div'>
              <h3>1</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, illum iste. Cum, quo quam est architecto impedit placeat quia quas quibusdam quisquam soluta magni! Quos consectetur officiis quis eius blanditiis.
              </p>
            </div>
            <div className='main-focus-div'>
              <h3>2</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, illum iste. Cum, quo quam est architecto impedit placeat quia quas quibusdam quisquam soluta magni! Quos consectetur officiis quis eius blanditiis.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home 