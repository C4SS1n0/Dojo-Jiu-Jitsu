// Archivo de rutas

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'src/pages/Home';
import QuienesSomos from 'src/pages/QuienesSomos';
import Academias from 'src/pages/Academias';
import Contacto from 'src/pages/Contacto';
import Login from 'src/pages/Login';
import MainLayout from 'src/layout/MainLayout';
import Register from 'src/pages/Register';
import Perfil from 'src/pages/Perfil';
import SeleccionRol from 'src/pages/SeleccionRol';

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/academias" element={<Academias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/seleccionar-rol" element= {<SeleccionRol />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;

