import React, { useState } from "react";
import "./Register.css";

const Register = ({ selectedRole, onVolverRol, onVolverLogin }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    afiliado: "",
    academia: "", // 👈 nuevo campo
    titulo: null,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "titulo") {
      setFormData({ ...formData, titulo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.email.includes("@")) newErrors.email = "Email inválido";
    if (formData.password.length < 6)
      newErrors.password = "Mínimo 6 caracteres";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";

    if (selectedRole === "maestro") {
      if (!formData.afiliado) newErrors.afiliado = "Este campo es obligatorio";
      if (!formData.titulo) newErrors.titulo = "Debés adjuntar tu título";
      if (formData.afiliado === "si" && !formData.academia.trim())
        newErrors.academia = "Debe ingresar el nombre de la academia";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      const formPayload = new FormData();
      formPayload.append("nombre", formData.nombre);
      formPayload.append("email", formData.email);
      formPayload.append("contraseña", formData.password);
      formPayload.append("confirmarContraseña", formData.confirmPassword);
      formPayload.append("rol", selectedRole);

      if (selectedRole === "maestro") {
        formPayload.append("afiliado", formData.afiliado);
        if (formData.afiliado === "si") {
          formPayload.append("academia", formData.academia);
        }
        formPayload.append("titulo", formData.titulo);
      }

      const response = await fetch("http://localhost:8000/registro", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Error al registrar");
      }

      const data = await response.json();
      console.log("✅ Usuario registrado con éxito:", data);
    } catch (error) {
      console.log("❌ Error en el registro:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const mostrarRol = selectedRole === "maestro" ? "Maestro" : "Estudiante";

  return (
    <div className="register-container-side">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Crear cuenta como {mostrarRol}</h2>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <span className="error">{errors.nombre}</span>}

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}

        {selectedRole === "maestro" && (
          <>
            <label>¿Estás afiliado a una academia?</label>
            <select
              name="afiliado"
              value={formData.afiliado}
              onChange={handleChange}
            >
              <option value="">Seleccionar...</option>
              <option value="si">Sí</option>
              <option value="independiente">Independiente / Retirado</option>
            </select>
            {errors.afiliado && <span className="error">{errors.afiliado}</span>}

            {formData.afiliado === "si" && (
              <>
                <label>¿A cuál?</label>
                <input
                  type="text"
                  name="academia"
                  placeholder="Nombre de la academia"
                  value={formData.academia}
                  onChange={handleChange}
                />
                {errors.academia && (
                  <span className="error">{errors.academia}</span>
                )}
              </>
            )}

            <label>Adjuntar título (PDF o imagen)</label>
            <input
              type="file"
              name="titulo"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
            />
            {errors.titulo && <span className="error">{errors.titulo}</span>}
          </>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Creando cuenta..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default Register;