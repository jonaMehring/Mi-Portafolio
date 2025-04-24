import Carrusel from './Carrusel'; 
import '/Users/Jonis/mi-portafolio/src/styles/Proyectos.css';
import '/Users/Jonis/mi-portafolio/src/styles/Carrusel.css';

function Project() {
  const proyectos = [
    {
      titulo: "Mi Portafolio Personal",
      descripcion: "Desarrollé este portafolio personal para mostrar mis habilidades como desarrollador Full Stack. Está construido con tecnologías modernas tanto en el frontend como backend.",
      tecnologias: [
        { label: "Frontend", stack: "React, CSS3, Bootstrap" },
        { label: "Backend", stack: "Node.js, Express" },
        { label: "Herramientas", stack: "Git, GitHub, EmailJS" }
      ],
      imagenes: [
        '/imgs/imgProyect/inicio.PNG',
        '/imgs/imgProyect/hab1.PNG',
        '/imgs/imgProyect/hab2.PNG',
        '/imgs/imgProyect/contacto.PNG',
        '/imgs/imgProyect/proyecto.PNG'
      ],
     codigo: "https://github.com/tuusuario/mi-portafolio"
    },
    {
      titulo: "Control Stock. (Proyecto en desarrollo)",
      descripcion: "Una aplicación para control de stock para diferentes rubros. Permite agregar, editar y eliminar productos.",
      tecnologias: [
        { label: "Frontend", stack: "React, CSS3, Bootstrap" },
        { label: "Backend", stack: "Node.js, Express" },
        { label: "Base de datos", stack: "My SQL"},
        { label: "Herramientas", stack: "Git, GitHub"}
      ],
      imagenes: [
        '/imgs/imgProyect/stock.png', 
      ],
      codigo: "https://github.com/tuusuario/mi-portafolio"
    }
  ];

  return (
    <section id="proyectos" className="seccion-proyectos">
      <h2 className="section-title">Proyectos</h2>

      {proyectos.map((proyecto, index) => (
        <div className="proyecto-card" key={index}>
          <h3>{proyecto.titulo}</h3>

          {/* Carrusel de imágenes */}
          <Carrusel imagenes={proyecto.imagenes} />

          <p>{proyecto.descripcion}</p>

          <ul>
            {proyecto.tecnologias.map((tech, index) => (
              <li key={index}><strong>{tech.label}:</strong> {tech.stack}</li>
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