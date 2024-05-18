import React from 'react'
import '../css/data.css'
import map from '../assets/img/data/1.gif'

function Data(){

    return(
        <>
            <main id='data'>
                <section className='data-content'>
                    <div className='data-text'>
                        <div className='data-title'>
                            <h1>Dados</h1>
                            <h2>do Problema</h2>
                        </div>
                        <p>
                            O estudo avaliou um sistema inovador de guia 
                            para pacientes em tempo real, utilizando 
                            tecnologia de localização interna e um 
                            aplicativo para Android. Testes com funcionários 
                            e pacientes mostraram que o sistema é preciso, 
                            fácil de usar e altamente satisfatório, com 
                            grande potencial para melhorar a experiência 
                            dos pacientes em hospitais. A alta taxa de 
                            sucesso nos testes e a pontuação de satisfação 
                            de 4,0 em 5,0 demonstram o valor do sistema 
                            como um serviço hospitalar centrado no paciente.
                        </p>
                        <a className='data-btn' href='https://www.sciencedirect.com/science/article/abs/pii/S1386505616300521?via%3Dihub'>
                            Mais Informações
                        </a>
                    </div>
                    <img src={map} alt='map' className='data-img'/>
                </section>
            </main>
        </>
    )
}

export default Data