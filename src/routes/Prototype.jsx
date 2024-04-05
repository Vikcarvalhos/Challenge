import React from 'react'
import '../css/prototype.css'
import mapImg from '../assets/img/prototype/mapa.svg'
import pyImg from '../assets/img/prototype/python.jpg'

function Prototype(){

    return(
        <>
            <main id='prototype'>
                <h1>Problem</h1>
                <h2>Prototype</h2>
                <section className='prototype-content'>
                    <div className='prototype-map-img'></div>
                    <div className='prototype-text'>
                        <img src={pyImg} alt='square' className='prototype-python-img'/>
                        <p>
                            Integrando o WhatsApp com o protótipo Python, agora é possível utilizar mensagens automatizadas do 
                            WhatsApp para localizar e guiar usuários até pontos de interesse específicos em ambientes complexos, 
                            como hospitais. Esta integração agiliza a acessibilidade e melhora a experiência de navegação dentro 
                            do Hospital das Clínicas.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Prototype