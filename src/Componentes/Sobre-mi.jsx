import '/Users/Jonis/mi-portafolio/src/styles/SobreMI.css';
function SobreMi() {

    return (
        <section className="sobre-mi">
            <div className="contenedor">
                <img
                    src='/Mi-Portafolio/imgs/foto_CV1.jpg'
                    alt="Mi Foto"
                    className="imagen mi-foto"
                />
                <div className="texto">
                    <h1>Jonatan Mehring</h1>
                    <h3>Developer Full Stack Jr</h3>
                    <p>
                        Soy graduado en la Universidad Tecnológica Nacional Facultad Regional Santa Fe, recibido como Técnico Univ. en Tecnologías de la Información.
                        Soy un apasionado por la tecnología y el desarrollo de software, me apasiona resolver desafíos, aprender constantemente y crear soluciones digitales que generen un impacto positivo.
                    </p>
                    <p>
                        Disfruto tanto del desarrollo backend como el diseño de interfaces intuitivas y funcionales, buscando siempre combinar eficiencia, estética y una excelente experiencia de usuario.
                        Además, tengo sólidos conocimientos en gestión y modelado de bases de datos, lo que me permite desarrollar aplicaciones robustas, escalables y bien estructuradas desde el backend hasta el frontend.
                    </p>
                    <p>
                        Siempre busco seguir creciendo profesionalmente y aprender nuevas tecnologías.
                    </p>

                </div>
            </div>
        </section>

    );

}
export default SobreMi;