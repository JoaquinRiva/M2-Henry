import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const InfoEnviada = () => {
  const { formulario } = useSelector((state) => {
    return state;
  });

  const [informacion, setInformacion] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  // Utiliza useEffect para obtener la información al montar el componente
  useEffect(() => {
    const { nombre, email, asunto, mensaje } = formulario;
    setInformacion({
      nombre,
      email,
      asunto,
      mensaje,
    });
  }, [formulario]);

  return (
    <div>
      {/* Renderiza la información */}
      <h2>Nombre: {informacion.nombre}</h2>
      <h2>Email: {informacion.email}</h2>
      <h2>Asunto: {informacion.asunto}</h2>
      <h2>Mensaje: {informacion.mensaje}</h2>
    </div>
  );
};

export default InfoEnviada;
