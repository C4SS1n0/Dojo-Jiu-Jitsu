// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import SeleccionRol from './SeleccionRol';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [rol, setRol] = useState(null); // Guarda el rol seleccionado

  const handleRolSeleccionado = (rolElegido) => {
    setRol(rolElegido);
    setIsLogin(false); // Pasar a registro
  };

  return (
    <div style={{ padding: '2rem' }}>
      {isLogin ? (
        <>
          <Login />
          <button onClick={() => setIsLogin(false)} style={{ marginTop: '1rem' }}>
            ¿No tenés cuenta? Registrate
          </button>
        </>
      ) : (
        <>
          {!rol ? (
            <SeleccionRol onSelect={handleRolSeleccionado} />
          ) : (
            <>
              <Register selectedRole={rol} />
              <button onClick={() => { setRol(null); }}>Volver a seleccionar rol</button>
              <button onClick={() => { setIsLogin(true); }}>Volver al login</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AuthPage;
