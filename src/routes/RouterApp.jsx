import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuienesSomos from "../pages/QuienesSomos";
import Academias from "../pages/Academias";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register";
import Perfil from "../pages/Perfil";
import SeleccionRol from "../pages/SeleccionRol";

export default function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="academias" element={<Academias />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/seleccionar-rol" element={<SeleccionRol />} />
      </Routes>
    </Router>
  );
}
