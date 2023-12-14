import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [state, handleSubmit] = useForm("xgegwwka");

  if (state.succeeded) {
    return <p>Formulario enviado con éxito</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label>Mensaje:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
};

export default FormComponent;
