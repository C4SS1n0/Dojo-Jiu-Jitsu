// src/pages/SeleccionRol.jsx
import React from 'react';
import './SeleccionRol.css';

const SeleccionRol = ({ onSelect }) => {
  return (
    <div className="seleccion-container">
      <div className="content-wrapper">
        <div className="header-section">
          <h2 className="title">¿Cómo deseas registrarte?</h2>
          <p className="subtitle">Selecciona tu rol para comenzar tu experiencia educativa</p>
        </div>
        
        <div className="opciones">
          <div className="card-option" onClick={() => onSelect('estudiante')}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Soy Estudiante</h3>
            <p>Accede a cursos, tareas y recursos educativos</p>
            <div className="card-arrow">→</div>
          </div>

          <div className="card-option" onClick={() => onSelect('maestro')}>
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Soy Maestro</h3>
            <p>Gestiona clases, estudiantes y contenido educativo</p>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </div>
      
      <div className="background-overlay"></div>
    </div>
  );
};

export default SeleccionRol;