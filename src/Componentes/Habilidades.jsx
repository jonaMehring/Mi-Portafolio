import '/Users/Jonis/mi-portafolio/src/styles/Habilidades.css';
function Habilidad() {
    const habilidades = [
        { nombre: 'Java:', img: '/Mi-Portafolio/imgs/java.png', nivel: '80%' },
        { nombre: 'PHP:', img: '/Mi-Portafolio/imgs/php.jpg', nivel: '80%' },
        { nombre: 'Spring Boot:', img: '/Mi-Portafolio/imgs/springg.jpg', nivel: '80%' },
        { nombre: 'MySQL:', img: '/Mi-Portafolio/imgs/my sql.png', nivel: '80%' },
        

    ];
    const frameworks =[
        { nombre: 'React:', img: '/Mi-Portafolio/imgs/React.png', nivel: '80%' },
        { nombre: 'Hibernate:', img: '/Mi-Portafolio/imgs/hibernate.jpg', nivel: '80%' },
        { nombre: 'Angular:', img: '/Mi-Portafolio/imgs/anguuuuu.png', nivel: '60%' },
        { nombre: 'Laravel:', img: '/Mi-Portafolio/imgs/laravel.jpg', nivel: '50%' },
        
        
    ];
    return (
        <section className="habilidades">
            <h2 className="titulo">Habilidades</h2>
            <div className="habilidades-wrapper">
                {habilidades.map((hab, index) => (
                    <div key={index} className="card">
                        <img src={hab.img} alt={hab.nombre} />
                        <div className="card-body">
                            <h5 className="card-t">{hab.nombre}</h5>
                            <p className="card-text">aplicado en proyectos reales.</p>
                            <div className="progress-mi" role="progressbar">
                                <div className="progress-bar-mi" style={{ width: hab.nivel }}>{hab.nivel}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <h2 className='titulo'>Frameworks</h2>
            <div className="frameworks-wrapper">
                {frameworks.map((fra, index) => (
                    <div key={index} className="card">
                        <img src={fra.img} alt={fra.nombre} />
                        <div className="card-body">
                            <h5 className="card-t">{fra.nombre}</h5>
                            <p className="card-text"> aplicado en proyectos reales.</p>
                            <div className="progress-mi" role="progressbar">
                                <div className="progress-bar-mi" style={{ width: fra.nivel }}>{fra.nivel}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );

}

export default Habilidad;