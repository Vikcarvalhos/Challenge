import React from 'react';
import '../css/howitworks.css';
import imgNull from '../assets/img/howitworks/image.svg';
import edgeProt from '../assets/img/howitworks/edge.png';
import pythonProt from '../assets/img/howitworks/python.jpg';
import { GoArrowRight } from "react-icons/go";

function Howitworks(){

    return(
        <>
            <main id='how-it-works'>
                <h1>Como</h1>
                <h2>Funciona</h2>
                <section className='work-container'>
                    <div className='work-method'>
                        <img src={pythonProt} alt='foto protótipo de python'/>
                        <div className='work-text'>
                            <h3>Python</h3>
                            <p>
                                Utilizando algoritmos para encontrar o menor caminho possível, ComPasso ajuda usuários a navegar até seus destinos, 
                                como salas de exame, de maneira eficiente. Além de fornecer direções, o sistema é capaz de armazenar informações 
                                básicas e realizar validações para garantir a precisão dos dados.
                            </p>
                            <a className='work-btn' href='#'>Veja Mais <span><GoArrowRight /></span></a>
                        </div>
                    </div>
                    <div className='work-method'>
                        <img src={edgeProt} alt='foto protótipo de edge'/>
                        <div className='work-text'>
                            <h3>Edge</h3>
                            <p>
                                Projeto que integra o Node-RED com a API do WhatsApp para otimizar a localização do HC, focando na melhoria da 
                                acessibilidade ao Hospital das Clínicas. Este projeto visa reduzir o tempo perdido buscando informações de 
                                localização, oferecendo uma solução rápida e eficaz por meio de mensagens automatizadas do WhatsApp.
                            </p>
                            <a className='work-btn' href='#'>View More <span><GoArrowRight /></span></a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Howitworks