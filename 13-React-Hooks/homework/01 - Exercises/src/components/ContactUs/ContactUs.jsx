import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import enviarForm from "../../redux/actions/actions";




const ContactUs = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });


const dispatch = useDispatch()



  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el envío por defecto del formulario
    dispatch(enviarForm(form)); // Despacha la acción con el formulario
    setForm({ // Limpia el formulario después de enviar
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <div>
      <form className="contactBg" onSubmit={handleSubmit}> {/* Agrega el atributo onSubmit */}
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" value={form.nombre} onChange={handleInput} />
        <label htmlFor="email">Email: </label>
        <input name="email" value={form.email} onChange={handleInput} />
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" value={form.asunto} onChange={handleInput} />
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" value={form.mensaje} onChange={handleInput} />
        <button type="submit">Enviar</button> {/* Agrega el atributo type */}
      </form>
    </div>
  );
};

export default ContactUs;
