import { Link } from 'react-router-dom';
function Header() {
  return (

    <header className="header">
      <h1 className="h">Developer Full Stack</h1>
      <nav className='links'>
        <Link to="/habilidades">Habilidades Técnicas</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/project">Projectos</Link>
        <Link to="/certificados">Certificados</Link>
        <Link to="/">Inicio</Link>
      </nav>
    </header>

  );
}

export default Header;