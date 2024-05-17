import React, { useState } from 'react';
import '../css/Appointment.css';
import caminho from '../assets/img/gallery/caminho.jpg';
import { motion } from "framer-motion";
import cadastro from '../cadastro.json';

function Consulta() {
  const [id, setId] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const item = cadastro.Paciente.find(entry => entry.id === parseInt(id));
    setResult(item);
  };

  return (
    <main className='consulta'>
      
      {result && (
        <motion.image  
          className='caminhoDivertido'
          initial={{ y: 0, opacity: -1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={caminho} alt="caminhoDivertido" className='caminhoDivertido'/>
        </motion.image>
      )}

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
      
      {!result && (
        <motion.div
          className='centerContent'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='centerContent'>
            <input
              type="number"
              placeholder="Digite o ID"
              value={id}
              onChange={e => setId(e.target.value)}
              className="inputPaciente"
            />
            <button onClick={handleSearch} className='buttonConsulta'>Buscar</button>
          </div>
        </motion.div>
      )}

      {result && (
        <div className='infosPaciente'>
          <motion.div
            className='informacoesMotion'   
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="informacoes"><h5>Nome:</h5> {result.nome}</p>
            <p className="informacoes"><h5>Atendimento médico:</h5> {result.atendimento}</p>
            <p className="informacoes"><h5>Próxima Consulta:</h5> {result.date}</p>
          </motion.div>
        </div>
      )}
    </main>
  );
}

export default Consulta;
