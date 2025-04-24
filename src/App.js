import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import './App.css';
import "./styles/Header.css";
import Habilidad from './Componentes/Habilidades';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';
import SobreMi from './Componentes/Sobre-mi';
import Project from './Componentes/Projets';

//Es el punto de entrada de tu app en React.
//Este es el componente principal de tu app.
//Acá empezás a armar tu portafolio: podés importar otros componentes como Home, Proyectos, etc.
function App() {
  return (
    <div className='app-container'>
      <Header />

      <main className='contenido-principal'>
        <Routes>
          <Route path='/' element={<SobreMi />} />
          <Route path='/habilidades' element={<Habilidad />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </main>
      <Footer />

    </div>

  );

}

export default App;

