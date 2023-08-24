import React, { useState } from 'react';
import './Contact.modules.css';
import { validate } from './validation';


//eslint-disable-next-line


export default function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    // Validar y actualizar errores
    setErrors(
      validate({
        ...inputs,
        [name]: value,
      })
    );
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario

    const errorArray = Object.values(errors); // Convertir los errores en un array
    if (errorArray.length === 0) {
      alert('Datos completos'); // Mostrar mensaje si no hay errores
      setInputs({
        name: '',
        email: '',
        message: '',
      });
      setErrors(validate(inputs)); // Resetear los errores
    } else {
      alert('Debe llenar todos los campos'); // Mostrar mensaje si hay errores
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Agrega el atributo onSubmit */}
      <label htmlFor="name">Nombre</label>
      <input
        name="name"
        placeholder="Escribe tu nombre..."
        type="text"
        value={inputs.name}
        onChange={handleChange}
        className={errors.name && 'warning'}
      />
      <p className="danger">{errors.name}</p>
      <label htmlFor="email">Correo electrónico</label>
      <input
        name="email"
        placeholder="Escribe tu email..."
        type="text"
        value={inputs.email}
        onChange={handleChange}
        className={errors.email && 'warning'}
      />
      <p className="danger">{errors.email}</p>
      <label htmlFor="message">Mensaje</label>
      <input
        name="message"
        placeholder="Escribe tu mensaje..."
        type="text"
        value={inputs.message}
        onChange={handleChange}
        className={errors.message && 'warning'}
      />
      <p className="danger">{errors.message}</p>
      <button type="submit">Enviar</button>
    </form>
  );
}


