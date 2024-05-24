import React, { useState } from 'react';
import Select from 'react-select';
import '../css/Appointment.css';
import idUm from '../assets/img/gallery/1.jpg';
import idDois from '../assets/img/gallery/2.jpg';
import idTres from '../assets/img/gallery/3.jpg';
import idQuatro from '../assets/img/gallery/4.jpg';
import idCinco from '../assets/img/gallery/5.jpg';
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';

const destinations = {
  'A': 'Cardiologista',
  'B': 'Raio-X',
  'C': 'Oncologia',
  'D': 'Pediatria',
  'E': 'Ginecologia',
  'F': 'Dermatologia',
  'G': 'Oftalmologia',
  'H': 'Ortopedia',
  'I': 'Neurologia',
  'J': 'Psiquiatria',
  'K': 'Urologia',
  'L': 'Gastroenterologia',
  'M': 'Endocrinologia',
  'N': 'Nefrologia',
  'O': 'Otorrinolaringologia',
  'P': 'Entrada',
  'Q': 'Imunologia'
};

function Consulta() {
  const [id, setId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSearch = () => {
    setLoading(true); // Set loading to true when the search starts
    axios.post('http://localhost:5000/', { id }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setLoading(false); // Set loading to false when the search ends
        if (response.data === "User not found") {
          setError(true);
          setResult(null);
        } else {
          setResult(response.data);
          setError(false);
        }
      })
      .catch(error => {
        setLoading(false); // Set loading to false in case of an error
        console.error('There was an error posting the data!', error);
      });
  };

  const handleNewSearch = () => {
    setId('');
    setResult(null);
    setError(false);
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
      <AnimatePresence>
        {result && (
          <motion.div
            className='caminhoDivertido'
            initial={{ y: 0, opacity: -1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {result.imagem ? (
              <img src={`data:image/jpeg;base64,${result.imagem}`} alt="caminhoDivertido" className='consultaImagem' />
            ) : (
              <img src={getImageById(result.id)} alt="caminhoDivertido" className='consultaImagem' />
            )}
            <button onClick={handleNewSearch} className='buttonConsulta'>Nova Consulta</button>
          </motion.div>
        )}
      </AnimatePresence>

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

      <AnimatePresence>
        {!result && (
          <motion.div
            className='centerContent'
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='centerContent'>
              <input
                type="text"
                placeholder="Digite o ID"
                value={id}
                onChange={e => setId(e.target.value)}
                className="inputPaciente"
              />
              <button onClick={handleSearch} className='buttonConsulta'>Buscar</button>
            </div>
            {loading && <Spinner />}
            {error && (
              <motion.div
                className='errorMessage'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Usuário não encontrado
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {result && (
        <div className='infosPaciente'>
          <motion.div
            className='informacoesMotion'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="informacoes"><h5>Nome:</h5> {result.nome}</p>
            <p className="informacoes"><h5>Atendimento médico:</h5> {result.destiny}</p>
            <p className="informacoes"><h5>Próxima Consulta:</h5> {result.date}</p>
          </motion.div>
        </div>
      )}
    </main>
  );
}

export default Consulta;
