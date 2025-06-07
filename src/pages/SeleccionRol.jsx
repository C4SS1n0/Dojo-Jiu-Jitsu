// src/pages/SeleccionRol.jsx
import React from 'react';
import './SeleccionRol.css';

const SeleccionRol = ({ onSelect }) => {
  return (
    <div className="seleccion-container">
      <h2>¿Cómo deseas registrarte?</h2>
      <div className="opciones">
        <button onClick={() => onSelect('estudiante')} className="btn-rol">
          Soy Estudiante
        </button>
        <button onClick={() => onSelect('maestro')} className="btn-rol">
          Soy Maestro
        </button>
      </div>
    </div>
  );
};

export default SeleccionRol;
