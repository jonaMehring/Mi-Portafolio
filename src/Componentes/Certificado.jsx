import '/Users/Jonis/mi-portafolio/src/styles/Certificado.css';
function Cretificado() {
        return (
                <div id="certificados" className="certificados-container">
                        <h2 className="titulo-seccion">Certificados Obtenidos</h2>
                        <div className="certificados-grid">
                                <div className="certificado-card">
                                        <img src="/Mi-Portafolio/imgs/imgProyect/certificadoFront.png" alt="Certificado 1" />
                                        <h3>Primeros pasos desarrollo Frontend</h3>
                                        <p>Argentina Programa</p>
                                        <a href="/Mi-Portafolio/imgs/imgProyect/certificadoFront.png" target="_blank" rel="noopener noreferrer">
                                                Ver certificado
                                        </a>
                                </div>

                                <div className="certificado-card">
                                        <img src="/Mi-Portafolio/imgs/imgProyect/certificadoBD.png" alt="Certificado 2" />
                                        <h3>Curso Base de Datos</h3>
                                        <p>Todo Code</p>
                                        <a href="/Mi-Portafolio/imgs/imgProyect/certificadoBD.png" target="_blank" rel="noopener noreferrer">
                                                Ver certificado
                                        </a>
                                </div>

                                <div className="certificado-card">
                                <img src="/Mi-Portafolio/imgs/imgProyect/titu.png" alt="Certificado 2" />
                                        <h3>Tecnicatura Univ. en Tecnologías de la Información</h3>
                                        <p>Unvesidad Tecnológica Nacional</p>
                                        <a href="/Mi-Portafolio/imgs/imgProyect/constancia.pdf" target="_blank" rel="noopener noreferrer">
                                                Ver certificado
                                        </a>
                                </div>
                        </div>
                </div>

        );


}


export default Cretificado;