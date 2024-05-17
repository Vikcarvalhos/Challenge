import React from 'react';
import '../css/Appointment.css';
import caminho from '../assets/img/gallery/caminho.jpg';
import { motion } from "framer-motion"



function Consulta() {

  return (
    <main className='consulta'>

      <motion.image  
        className='caminhoDivertido'
        initial={{ y: 0, opacity: -1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <img src={caminho} alt="caminhoDivertido" className='caminhoDivertido'/>
      </motion.image>

      <motion.div
            className='tituloConsulta'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className='tituloConsulta'>
                <h1>Próxima</h1>
                <h2>Consulta</h2>
            </div>
        </motion.div>

        
        <div className='infosPaciente'>
            <motion.p
            className='.informacoesMotion'   
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            >
            <p className="informacoes"><h5>Nome:</h5> Usuário da Silva</p>
            
            <p className="informacoes"><h5>Atendimento médico:</h5> Ortopedista</p>

            <p className="informacoes"><h5>Próxima Consulta:</h5> 23/05/2024</p>
            </motion.p>
        </div>
      

    </main>
  );
}

export default Consulta;