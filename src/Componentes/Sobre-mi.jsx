import '/Users/Jonis/mi-portafolio/src/styles/SobreMI.css';
function SobreMi() {
    return (
        <section className="sobre-mi">
            <div className='contenedor'>
                <div className='imagen'>
                    <img src='/Mi-Portafolio/imgs/foto_CV1.jpg' alt="mi foto" className="mi-foto" />
                </div>
                <div className='texto'>
                    <h1>Hola soy Jonatan Mehring!!</h1>
                    <h3>Sobre mi:</h3>
                    <p> Soy desarrollador Full Stack, graduado en la Universidad Tecnológica Nacional Facultad Regional Santa Fe, recibido como Técnico universitario en Tecnologías de la Información.
                        <p> Me apasiona resolver desafíos, aprender constantemente y crear soluciones digitales que generen un impacto positivo.</p>
                        <p> Disfruto tanto del desarrollo backend como el diseño de interfaces intuitivas y funcionales, buscando siempre combinar eficiencia, estética y una excelente experiencia de usuario.</p>
                        Además, tengo sólido conocimientos en gestión y modelado de bases de datos, lo que me permite desarrollar aplicaciones robustas, escalables y bien estructuradas desde el backend hasta el frontend.
                    </p>
                </div>
            </div>
        </section>

    );

}
export default SobreMi;