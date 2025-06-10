// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import SeleccionRol from './SeleccionRol';

const AuthPage = () => {
  const [vista, setVista] = useState('login'); // login | rol | registro
  const [rol, setRol] = useState(null);

  const handleRolSeleccionado = (rolElegido) => {
    setRol(rolElegido);
    setVista('registro');
  };

  const handleVolverRol = () => {
    setVista('rol');
    setRol(null); // Opcional: limpiar el rol seleccionado
  };

  const handleVolverLogin = () => {
    setVista('login');
    setRol(null); // Opcional: limpiar el rol seleccionado
  };

  return (
    <div style={{ padding: '2rem' }}>
      {vista === 'login' && (
        <>
          <Login onRegisterClick={() => setVista('rol')} />
        </>
      )}

      {vista === 'rol' && (
        <SeleccionRol onSelect={handleRolSeleccionado} />
      )}

      {vista === 'registro' && (
        <>
          <Register 
            selectedRole={rol}
            onVolverRol={handleVolverRol}
            onVolverLogin={handleVolverLogin}
          />
        </>
      )}
    </div>
  );
};

export default AuthPage;