import React, { useState } from 'react';
import './Perfil.css';

const AlumnoPerfil = () => (
  <div className="perfil-container perfil-alumno-bg">
    <div className="perfil-header alumno">
      <h2>Panel del Estudiante</h2>
      <p>¡Bienvenido a tu espacio personal!</p>
    </div>

    <section>
      <h3>Mis clases</h3>
      <ul>
        <li>Lunes y miércoles - 18:00 a 19:30</li>
        <li>Viernes - 17:00 a 18:30</li>
      </ul>
    </section>

    <section>
      <h3>Progreso</h3>
      <p>Cinturón actual: Blanca</p>
      <p>Asistencias este mes: 7</p>
    </section>
  </div>
);

const MaestroPerfil = () => (
  <div className="perfil-container perfil-maestro-bg">
    <div className="perfil-header maestro">
      <h2>Panel del Maestro</h2>
      <p>Gestión de tu dojo y alumnos</p>
    </div>

    <section>
      <h3>Mi Academia</h3>
      <p>Nombre: Dojo Latino</p>
      <p>Ubicación: Buenos Aires, Argentina</p>
    </section>

    <section>
      <h3>Alumnos Registrados</h3>
      <ul>
        <li>Ana Pérez - Azul</li>
        <li>Luciano Gómez - Blanca</li>
      </ul>
    </section>
  </div>
);

const PerfilesJiuJitsu = () => {
  const [tipoUsuario, setTipoUsuario] = useState('alumno'); // 'alumno' | 'maestro'

  return (
    <>
      <div className="selector-rol-fijo">
        <button
          onClick={() => setTipoUsuario('alumno')}
          className={tipoUsuario === 'alumno' ? 'active-alumno' : 'inactive'}
        >
          Vista Alumno
        </button>
        <button
          onClick={() => setTipoUsuario('maestro')}
          className={tipoUsuario === 'maestro' ? 'active-maestro' : 'inactive'}
        >
          Vista Maestro
        </button>
      </div>

      {tipoUsuario === 'alumno' ? <AlumnoPerfil /> : <MaestroPerfil />}
    </>
  );
};

export default PerfilesJiuJitsu;