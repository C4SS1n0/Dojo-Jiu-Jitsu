//Creamos un componente base para navegar.

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
  <Link to="/">
    <img src="/src/assets/logo.png" alt="Logo" className="navbar-logo-img" />
    <span>JiuStats</span>
  </Link>
</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/quienes-somos">Quiénes somos</Link></li>
        <li><Link to="/login" className="navbar-login">Ingresar</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

