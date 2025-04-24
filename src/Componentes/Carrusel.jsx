import React, { useState } from 'react';
import '/Users/Jonis/mi-portafolio/src/styles/Carrusel.css';

function Carrusel({ imagenes }) {
  const [indexActual, setIndexActual] = useState(0);

  const siguiente = () => {
    setIndexActual((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndexActual((prevIndex) =>
      (prevIndex - 1 + imagenes.length) % imagenes.length
    );
  };

  return (
    <div className="carrusel">
      <button className="carrusel-btn" onClick={anterior}>◀</button>
      <img
        src={imagenes[indexActual]}
        alt={`imagen-${indexActual}`}
        className="carrusel-imagen"
      />
      <button className="carrusel-btn" onClick={siguiente}>▶</button>
    </div>
  );
}

export default Carrusel;