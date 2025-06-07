import React, { useState } from 'react';
import './Login.css';

const Login = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = { email: '', password: '' };
    if (!email) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Correo no válido.';
    }
    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.';
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      console.log('Login enviado con:', email, password);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Ingresar a la Plataforma</h2>

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          className={errors.email ? 'input-error' : ''}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          className={errors.password ? 'input-error' : ''}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Cargando...' : 'Iniciar sesión'}
        </button>

        <p className="login-link">
          ¿No tenés cuenta?{' '}
          <button type="button" onClick={onRegisterClick} className="link-button">
            Registrate acá
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;