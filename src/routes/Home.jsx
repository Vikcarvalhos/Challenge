import '../css/home.css'
import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react';
import maproute from '../assets/img/home/maproute.gif';
import phonelocation from '../assets/img/home/phonelocation.gif';
import step1 from '../assets/img/home/step1.svg';
import step2 from '../assets/img/home/step2.svg';
import step3 from '../assets/img/home/step3.svg';
import { GoArrowRight } from "react-icons/go";
import contact from '../assets/img/home/contact.svg';

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
            <h1>Nosso</h1>
            <h2>Projeto</h2>
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
            <h2>Proposta</h2>
            <p>
              Neste projeto, propomos a implementação de um Totem 
              Interativo para pacientes e acompanhantes em ambientes 
              hospitalares. O objetivo é abordar e solucionar os 
              desafios comuns enfrentados por esses usuários como 
              dificuldades de navegação dentro do hospital e ansiedade 
              dentro de um complexo hospitalar. Através de uma solução 
              integrada e centrada no usuário, pretendemos oferecer uma 
              experiência hospitalar mais fluida, informativa e menos 
              estressante.
            </p>
            <button className='step-button'>Leia Mais<GoArrowRight /></button>
          </div>
        </section>

        <section className='main-focus'>
          <h2>Foco Principal</h2>
          <div className='main-focus-container'>
            <div className='main-focus-div'>
              <h3>1</h3>
              <p>
                Investir em soluções eficazes para localização dentro 
                de complexos hospitalares é fundamental para garantir 
                uma experiência positiva e eficiente para pacientes, 
                acompanhantes e profissionais da saúde.
              </p>
            </div>
            <div className='main-focus-div'>
              <h3>2</h3>
              <p>
                O ComPasso simboliza empatia, inclusão, 
                inovação e colaboração, visando melhorar a experiência 
                hospitalar com ênfase no cuidado humano e no apoio 
                através da tecnologia e da participação comunitária.
              </p>
            </div>
          </div>
        </section>
        <section className='contact'>
          <h2>Contato</h2>
          <div className='contact-container'>
            <form className='contact-form'>
              <input type="text" id="name" name="name" placeholder="Name" required />

              <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />

              <input type="email" id="email" name="email" placeholder="Email" required />

              <textarea id="message" name="message" placeholder="Message" required style={{resize: "none"}}></textarea>

              <button type="submit">Enviar E-mail</button>
            </form>
            <img src={contact} className='contact-image'></img>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home 