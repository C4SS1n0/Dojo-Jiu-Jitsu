// src/pages/Perfil.jsx
import React from 'react';
import './Perfil.css';

const Perfil = () => {
  return (
    <div className="perfil-container">
      <h2>Mi Perfil</h2>
      <p>Aquí podrás ver y editar tu información personal.</p>

      <section className="perfil-section">
        <h3>Datos personales</h3>
        {/* Aquí irán nombre, email, etc */}
      </section>

      <section className="perfil-section">
        <h3>Mis clases</h3>
        {/* Aquí irán clases inscritas o historial */}
      </section>

      <section className="perfil-section">
        <h3>Configuración</h3>
        {/* Cambiar contraseña, cerrar sesión, etc */}
      </section>
    </div>
  );
};

export default Perfil;
