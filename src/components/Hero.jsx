import React from "react";
import "./hero.css";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>La evolución del Jiu-Jitsu comienza aquí</h1>
        <h2>Unimos a toda Latinoamérica en una sola plataforma.</h2>
        <p>
          Gestioná tus academias, conectá con maestros y llevá el progreso de
          tus alumnos al siguiente nivel.
        </p>
        <Link to="/login">
          {" "}
          <Button>Ingresar a la plataforma</Button>{" "}
        </Link>
      </div>
    </section>
  );
};


