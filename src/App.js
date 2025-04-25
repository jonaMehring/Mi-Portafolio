import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Header';
import './App.css';
import "./styles/Header.css";
import Habilidad from './Componentes/Habilidades';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';
import SobreMi from './Componentes/Sobre-mi';
import Project from './Componentes/Projets';
import Certificado from './Componentes/Certificado';
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
            <Route path='/certificados' element={<Certificado />} />
          </Routes>
        </main>
        <Footer />
      

    </div>

  );

}

export default App;

