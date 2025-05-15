import React, { useState } from 'react';
import Login from './login'; // Asegúrate de que la ruta sea correcta
import Register from './register'; // Asegúrate de que la ruta sea correcta
import SeleccionRol from './seleccionrol'; // Asegúrate de que la ruta sea correcta

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setSelectedRole(null); // Resetear el rol al cambiar de formulario
  };

  const handleRoleSelection = (rol) => {
    setSelectedRole(rol);
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
      {isLogin ? (
        <Login />
      ) : selectedRole === null ? (
        <SeleccionRol onSelectRole={handleRoleSelection} />
      ) : (
        <Register role={selectedRole} />
      )}
      <button onClick={toggleForm}>
        {isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
      </button>
    </div>
  );
};

export default AuthPage;

