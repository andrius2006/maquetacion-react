// src/Saludo.jsx
import { useState } from 'react';

function Saludo() {
  const [nombre] = useState("Juan"); // eliminamos setNombre
  const [saludo, setSaludo] = useState("¡Hola");

  const cambiarSaludo = () => {
    setSaludo(saludo === "¡Hola" ? "¡Qué tal" : "¡Hola");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>{saludo}, {nombre}! 👋</h2>
      <button onClick={cambiarSaludo}>
        Cambiar saludo
      </button>
    </div>
  );
}

export default Saludo;