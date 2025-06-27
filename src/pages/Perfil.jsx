import React, { useState } from 'react';
import { User, Award, Calendar, BookOpen, Users, Settings, Trophy, Target, Clock, MapPin, Star, TrendingUp } from 'lucide-react';
import './perfil.css'; // Importar los estilos CSS

// Componente para tarjetas de estadísticas
const StatCard = ({ value, label, icon: Icon, colorClass = "blue" }) => (
  <div className={`stat-card ${colorClass}`}>
    <div className="stat-icon">
      <Icon size={20} />
    </div>
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

// Componente para tarjetas de información
const InfoCard = ({ icon: Icon, title, children, colorClass = "blue" }) => (
  <div className={`info-card ${colorClass}`}>
    <div className="info-card-header">
      <Icon className="info-card-icon" size={20} />
      <h3 className="info-card-title">{title}</h3>
    </div>
    {children}
  </div>
);

// Perfil del Estudiante
const EstudiantePerfil = () => {
  const [estudianteData] = useState({
    nombre: "Carlos Mendoza",
    cinturon: "Azul",
    academia: "BJJ Academy Buenos Aires",
    tiempoEntrenando: "2 años 4 meses",
    proximoGrado: "Azul con 2 rayas",
    clasesTomadas: 87,
    horasEntrenamiento: 174,
    proximaClase: "Hoy 19:00 - Gi Avanzado"
  });

  return (
    <div className="container gradient-blue">
      {/* Header del Perfil */}
      <div className="card card-header blue mb-6">
        <div className="flex items-center space-x-4">
          <div className="user-avatar student">
            CM
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">{estudianteData.nombre}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <span className="badge blue">
                Cinturón {estudianteData.cinturon}
              </span>
              <span className="text-gray-600 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {estudianteData.academia}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-4 mb-6">
        <StatCard 
          value={estudianteData.clasesTomadas} 
          label="Clases Tomadas" 
          icon={BookOpen} 
          colorClass="blue" 
        />
        <StatCard 
          value={estudianteData.horasEntrenamiento} 
          label="Horas de Entrenamiento" 
          icon={Clock} 
          colorClass="green" 
        />
        <StatCard 
          value={estudianteData.tiempoEntrenando} 
          label="Tiempo Entrenando" 
          icon={Calendar} 
          colorClass="purple" 
        />
        <StatCard 
          value="4" 
          label="Técnicas Nuevas" 
          icon={Target} 
          colorClass="amber" 
        />
      </div>

      <div className="grid grid-cols-2">
        {/* Progreso Actual */}
        <InfoCard icon={Award} title="Mi Progreso" colorClass="blue">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progreso a {estudianteData.proximoGrado}</span>
                <span className="text-sm text-gray-600">75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Técnicas dominadas:</span>
                <p className="font-semibold">23/35</p>
              </div>
              <div>
                <span className="text-gray-600">Sparring promedio:</span>
                <p className="font-semibold">4.2/5</p>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Próxima Clase */}
        <InfoCard icon={Calendar} title="Agenda" colorClass="green">
          <div className="space-y-3">
            <div className="alert success">
              <p className="font-semibold">{estudianteData.proximaClase}</p>
              <p className="text-sm">Con Profesor Martinez</p>
            </div>
            <div className="text-sm text-gray-600">
              <p>• Mañana 18:00 - No-Gi Intermedio</p>
              <p>• Viernes 19:30 - Sparring Libre</p>
            </div>
          </div>
        </InfoCard>

        {/* Logros Recientes */}
        <InfoCard icon={Trophy} title="Logros Recientes" colorClass="yellow">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Star className="achievement-icon gold" />
              <span className="text-sm">Técnica del mes: Kimura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="achievement-icon blue" />
              <span className="text-sm">50 clases consecutivas</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="achievement-icon green" />
              <span className="text-sm">Mejoró tiempo de escape</span>
            </div>
          </div>
        </InfoCard>

        {/* Configuración */}
        <InfoCard icon={Settings} title="Mi Configuración" colorClass="gray">
          <ul className="config-menu space-y-2">
            <li>
              <button className="config-item">
                <User size={16} />
                Editar Perfil
              </button>
            </li>
            <li>
              <button className="config-item">
                <Calendar size={16} />
                Horarios de Clase
              </button>
            </li>
            <li>
              <button className="config-item">
                <Award size={16} />
                Objetivos Personales
              </button>
            </li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
};

// Perfil del Maestro
const MaestroPerfil = () => {
  const [maestroData] = useState({
    nombre: "Profesor Miguel Rodriguez",
    grado: "Cinturón Negro 3er Dan",
    academia: "BJJ Academy Buenos Aires",
    experiencia: "15 años",
    estudiantesActivos: 42,
    clasesEstesMes: 18,
    proximaClase: "Hoy 19:00 - Gi Avanzado"
  });

  return (
    <div className="container gradient-amber">
      {/* Header del Perfil */}
      <div className="card card-header amber mb-6">
        <div className="flex items-center space-x-4">
          <div className="user-avatar teacher">
            MR
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">{maestroData.nombre}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <span className="badge amber">
                {maestroData.grado}
              </span>
              <span className="text-gray-600 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {maestroData.academia}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas del Maestro */}
      <div className="grid grid-cols-4 mb-6">
        <StatCard 
          value={maestroData.estudiantesActivos} 
          label="Estudiantes Activos" 
          icon={Users} 
          colorClass="amber" 
        />
        <StatCard 
          value={maestroData.clasesEstesMes} 
          label="Clases Este Mes" 
          icon={BookOpen} 
                   colorClass="blue" 
        />
        <StatCard 
          value="8.5" 
          label="Evaluación Promedio" 
          icon={Star} 
          colorClass="gold" 
        />
        <StatCard 
          value={maestroData.experiencia} 
          label="Experiencia" 
          icon={Award} 
          colorClass="purple" 
        />
      </div>

      <div className="grid grid-cols-2">
        {/* Administración de Estudiantes */}
        <InfoCard icon={Users} title="Mis Estudiantes" colorClass="amber">
          <div className="space-y-3">
            <div className="student-grid">
              <div className="student-item beginner">
                <span className="text-amber-700 font-semibold">Principiantes:</span>
                <div className="student-count">18</div>
              </div>
              <div className="student-item intermediate">
                <span className="text-blue-700 font-semibold">Intermedios:</span>
                <div className="student-count">15</div>
              </div>
              <div className="student-item advanced">
                <span className="text-purple-700 font-semibold">Avanzados:</span>
                <div className="student-count">9</div>
              </div>
              <div className="student-item exam-ready">
                <span className="text-green-700 font-semibold">Próximos exámenes:</span>
                <div className="student-count">5</div>
              </div>
            </div>
            <button className="btn btn-full" style={{background: '#fef3c7', color: '#92400e'}}>
              Ver Todos los Estudiantes
            </button>
          </div>
        </InfoCard>

        {/* Horarios y Clases */}
        <InfoCard icon={Calendar} title="Mis Clases" colorClass="blue">
          <div className="space-y-3">
            <div className="alert info">
              <p className="font-semibold">{maestroData.proximaClase}</p>
              <p className="text-sm">12 estudiantes confirmados</p>
            </div>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Mañana 18:00 - No-Gi Intermedio</span>
                <span className="text-gray-500">8 estudiantes</span>
              </div>
              <div className="flex justify-between">
                <span>Viernes 19:30 - Sparring Libre</span>
                <span className="text-gray-500">15 estudiantes</span>
              </div>
            </div>
            <button className="btn btn-full" style={{background: '#dbeafe', color: '#1e40af'}}>
              Gestionar Horarios
            </button>
          </div>
        </InfoCard>

        {/* Reportes y Progreso */}
        <InfoCard icon={TrendingUp} title="Reportes de Progreso" colorClass="green">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Promedio asistencia:</span>
                <p className="font-semibold text-green-600">85%</p>
              </div>
              <div>
                <span className="text-gray-600">Estudiantes mejorados:</span>
                <p className="font-semibold text-green-600">78%</p>
              </div>
            </div>
            <div className="alert success">
              <p className="text-sm">📈 Mejora del 12% en técnicas básicas este mes</p>
            </div>
            <button className="btn btn-full" style={{background: '#ecfdf5', color: '#065f46'}}>
              Ver Reportes Completos
            </button>
          </div>
        </InfoCard>

        {/* Configuración del Maestro */}
        <InfoCard icon={Settings} title="Mi Configuración" colorClass="gray">
          <ul className="config-menu space-y-2">
            <li>
              <button className="config-item">
                <User size={16} />
                Editar Perfil Profesional
              </button>
            </li>
            <li>
              <button className="config-item">
                <Users size={16} />
                Administrar Estudiantes
              </button>
            </li>
            <li>
              <button className="config-item">
                <Calendar size={16} />
                Configurar Clases
              </button>
            </li>
            <li>
              <button className="config-item">
                <Award size={16} />
                Criterios de Evaluación
              </button>
            </li>
          </ul>
        </InfoCard>
      </div>
    </div>
  );
};

// Componente principal
const PerfilesJiuJitsu = () => {
  const [tipoUsuario, setTipoUsuario] = useState('estudiante');

  return (
    <div>
      {/* Selector de tipo de usuario */}
      <div className="role-selector">
        <button
          onClick={() => setTipoUsuario('estudiante')}
          className={tipoUsuario === 'estudiante' ? 'active-student' : 'inactive'}
        >
          Vista Estudiante
        </button>
        <button
          onClick={() => setTipoUsuario('maestro')}
          className={tipoUsuario === 'maestro' ? 'active-teacher' : 'inactive'}
        >
          Vista Maestro
        </button>
      </div>

      {/* Renderizado condicional del perfil */}
      {tipoUsuario === 'estudiante' ? <EstudiantePerfil /> : <MaestroPerfil />}
    </div>
  );
};

export default PerfilesJiuJitsu;