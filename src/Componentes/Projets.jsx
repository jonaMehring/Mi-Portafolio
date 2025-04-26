import React from 'react';
import Carrusel from './Carrusel';
import '/Users/Jonis/mi-portafolio/src/styles/Proyectos.css';
import '/Users/Jonis/mi-portafolio/src/styles/Carrusel.css';

function Project() {
  const proyectos = [
    {
      titulo: "Mi Portafolio Personal",
      descripcion: "Desarrollé este portafolio personal para mostrar mis habilidades como desarrollador Full Stack...",
      tecnologias: [
        { label: "Frontend", stack: "React, CSS3, Bootstrap" },
        { label: "Backend", stack: "Node.js, Express" },
        { label: "Herramientas", stack: "Git, GitHub, EmailJS" }
      ],
      imagenes: [
        '/Mi-Portafolio/imgs/imgProyect/inicio.PNG',
        '/Mi-Portafolio/imgs/imgProyect/hab1.PNG',
        '/Mi-Portafolio/imgs/imgProyect/hab22.jpg',
        '/Mi-Portafolio/imgs/imgProyect/contacto.PNG',
        '/Mi-Portafolio/imgs/imgProyect/proyecto.PNG'
      ],
      codigo: "https://github.com/tuusuario/mi-portafolio"
    },
    {
      titulo: "Control de Stock (En desarrollo)",
      descripcion: "App de gestión de stock para distintos rubros. Permite agregar, editar y eliminar productos.",
      tecnologias: [
        { label: "Frontend", stack: "React, CSS3, Bootstrap" },
        { label: "Backend", stack: "Node.js, Express" },
        { label: "Base de datos", stack: "MySQL" },
        { label: "Herramientas", stack: "Git, GitHub" }
      ],
      imagenes: [
        '/Mi-Portafolio/imgs/imgProyect/stock.png'
      ],
      codigo: "https://github.com/tuusuario/mi-portafolio"
    }
  ];

  return (
    <section className="project-section">
      <h2 className="section-title">Proyectos</h2>

      {proyectos.map((proyecto, index) => (
        <div className="proyecto-card" key={index}>
          <h3>{proyecto.titulo}</h3>
          
          <Carrusel imagenes={proyecto.imagenes} />
          
          <p>{proyecto.descripcion}</p>
          
          <ul>
            {proyecto.tecnologias.map((tech, idx) => (
              <li key={idx}><strong>{tech.label}:</strong> {tech.stack}</li>
            ))}
          </ul>
          
          <div className="proyecto-links">
            <a href={proyecto.codigo} target="_blank" rel="noreferrer">💻 Ver Código</a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;