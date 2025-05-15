// Archivo de rutas

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'src/pages/Home';
import QuienesSomos from 'src/pages/QuienesSomos';
import Academias from 'src/pages/Academias';
import Contacto from 'src/pages/Contacto';
import MainLayout from 'src/layout/MainLayout';
import Perfil from 'src/pages/Perfil';
import AuthPage from "src/pages/Authpage"

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/academias" element={<Academias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;

