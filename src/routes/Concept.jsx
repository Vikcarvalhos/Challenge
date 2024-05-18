import React from 'react'
import '../css/concept.css'
import imgNull from '../assets/img/concept/image.svg'
import information from '../assets/img/concept/information.svg'
import satisfaction from '../assets/img/concept/satisfaction.svg'


function Concept(){
    
    return(
        <>
            <main id='concept'>
                <h1>Conceitos</h1>
                <h2>do Projeto</h2>
                <section className='concept-container'>
                    <div className='concept-div'>
                        <img src={imgNull} alt='image' />
                        <div className='concept-text'>
                            <h3>Informações Claras e Suporte Emocional</h3>
                            <p>
                                Transformação de experiências hospitalares 
                                potencialmente traumáticas em experiências 
                                mais gerenciáveis e acolhedoras.
                            </p>
                        </div>
                    </div>
                    <div className='concept-div-inverted'>
                        <img src={information} alt='image' />
                        <div className='concept-text'>
                            <h3>Acesso Facilitado a Informações</h3>
                            <p>
                                Melhor comunicação entre pacientes e 
                                hospital, facilitando acesso a informações 
                                e respostas rápidas.
                            ​</p>
                        </div>
                    </div>
                    <div className='concept-div'>
                        <img src={satisfaction} alt='image' />
                        <div className='concept-text'>
                            <h3>Confiança e Satisfação Elevadas</h3>
                            <p>
                                Maior confiança no atendimento recebido 
                                e aumento nos índices de satisfação de 
                                pacientes e acompanhantes.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Concept