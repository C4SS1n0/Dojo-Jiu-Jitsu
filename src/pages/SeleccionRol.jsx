// src/pages/SeleccionRol.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SeleccionRol.css';

const SeleccionRol = () => {
  const navigate = useNavigate();

  const handleSeleccion = (rol) => {
    navigate(`/registro?rol=${rol}`);
  };

  return (
    <div className="seleccion-container">
      <h2>¿Cómo deseas registrarte?</h2>
      <div className="opciones">
        <button onClick={() => handleSeleccion('Estudiante')} className="btn-rol">
          Soy Estudiante
        </button>
        <button onClick={() => handleSeleccion('Maestro')} className="btn-rol">
          Soy Maestro
        </button>
      </div>
    </div>
  );
};

export default SeleccionRol;
