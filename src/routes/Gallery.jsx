import React from 'react';
import '../css/galleryGrid.css'
import caminho from '../assets/img/gallery/caminho.jpg';



function Consulta() {

  return (
    <main className='consulta'>

      <img src={caminho} alt="caminhoDivertido" className='caminhoDivertido'/>

      <div className='tituloConsulta'>
        <h1>Próxima</h1>
        <h2>Consulta</h2>
      </div>
      

      <div className='infosPaciente'>
        <p className="informacoes"><h5>Nome:</h5> Usuário da Silva</p>
        
        <p className="informacoes"><h5>Atendimento médico:</h5> Ortopedista</p>

        <p className="informacoes"><h5>Próxima Consulta:</h5> 23/05/2024</p>
      </div>
      

    </main>
  );
}

export default Consulta;