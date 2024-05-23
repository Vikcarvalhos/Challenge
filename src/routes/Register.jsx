import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import '../css/Appointment.css';

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

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    consulta: null
  });

  const [errors, setErrors] = useState({});

  const options = Object.entries(destinations).map(([key, value]) => ({
    value: key,
    label: value
  }));

  const validate = () => {
    let tempErrors = {};
    if (!formData.nome || !/^[a-zA-Z\s]+$/.test(formData.nome) || formData.nome.split(' ').length < 2) {
      tempErrors.nome = 'Nome inválido. Deve conter pelo menos duas palavras e não conter números.';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email inválido.';
    }
    if (!formData.telefone || !/^\d{7,15}$/.test(formData.telefone)) {
      tempErrors.telefone = 'Telefone inválido.';
    }
    if (!formData.consulta) {
      tempErrors.consulta = 'Consulta inválida.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      consulta: selectedOption.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post('http://localhost:5000/create', formData)
        .then(response => {
          if(response.status === 200){
            alert('Usuário cadastrado com sucesso!');
              setFormData({
              nome: '',
              email: '',
              telefone: '',
              consulta: null
            });
          }else{
            alert('Erro ao cadastrar usuário!');
          }
        })
        .catch(error => {
          console.error('Houve um erro ao cadastrar o usuário!', error);
        });
    }
  };

  return (
    <main className='cadastro'>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Nome</label>
          <input
            type='text'
            name='nome'
            value={formData.nome}
            onChange={handleChange}
            className={errors.nome ? 'input-error' : ''}
          />
          {errors.nome && <span className='error'>{errors.nome}</span>}
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className='form-group'>
          <label>Telefone</label>
          <input
            type='text'
            name='telefone'
            value={formData.telefone}
            onChange={handleChange}
            className={errors.telefone ? 'input-error' : ''}
          />
          {errors.telefone && <span className='error'>{errors.telefone}</span>}
        </div>
        <div className='form-group'>
          <label>Consulta</label>
          <Select
            options={options}
            value={options.find(option => option.value === formData.consulta)}
            onChange={handleSelectChange}
            placeholder="Selecione uma especialidade"
            className={errors.consulta ? 'input-error' : ''}
          />
          {errors.consulta && <span className='error'>{errors.consulta}</span>}
        </div>
        <button type='submit' className='buttonCadastro'>Cadastrar</button>
      </form>
    </main>
  );
}

export default Cadastro;