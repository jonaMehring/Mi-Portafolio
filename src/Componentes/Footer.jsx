import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '/Users/Jonis/mi-portafolio/src/styles/Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p><FaEnvelope /> jonatanmehring9@gmail.com</p>
        <p><FaPhone /> +54 3496-516418</p>
      </div>
      <div className="contact-links">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/jonatan-mehring-49a213307/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="/Mi-Portafolio/cv/CV-Mehring-Jonatan.pdf" target="_blank" rel="noopener noreferrer">
          Descargar CV
        </a>
      </div>
    </footer>
  );
}
export default Footer;