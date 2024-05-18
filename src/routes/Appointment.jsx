import React, { useState } from 'react';
import '../css/Appointment.css';
import idUm from '../assets/img/gallery/1.jpg';
import idDois from '../assets/img/gallery/2.jpg';
import idTres from '../assets/img/gallery/3.jpg';
import idQuatro from '../assets/img/gallery/4.jpg';
import idCinco from '../assets/img/gallery/5.jpg';
import { motion } from "framer-motion";
import cadastro from '../cadastro.json';

function Consulta() {
  const [id, setId] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const item = cadastro.Paciente.find(entry => entry.id === parseInt(id));
    setResult(item);
  };

  const handleNewSearch = () => {
    setId('');
    setResult(null);
  };

  const getImageById = (id) => {
    switch (id) {
      case 1:
        return idUm;
      case 2:
        return idDois;
      case 3:
        return idTres;
      case 4:
        return idQuatro;
      case 5:
        return idCinco;
      default:
        return null;
    }
  };

  return (
    <main className='consulta'>
      {result && (
        <motion.div  
          className='caminhoDivertido'
          initial={{ y: 0, opacity: -1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={getImageById(result.id)} alt="caminhoDivertido" className='caminhoDivertido'/>
          <button onClick={handleNewSearch} className='buttonConsulta'>Nova Consulta</button>
        </motion.div>
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