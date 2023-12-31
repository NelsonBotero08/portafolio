import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../Styles/FormComponent.css";

const FormComponent = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [state, handleSubmit] = useForm("xgegwwka");

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessModal(true);

      setTimeout(() => {
        setShowSuccessModal(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    }
  }, [state.succeeded]);

  return (
    <div>
      {/* Modal de éxito */}
      {showSuccessModal && (
        <div className="success-modal">
          <p>Formulario se envió con éxito</p>
        </div>
      )}

      {/* Formulario */}
      <form className="form_contact" onSubmit={handleSubmit}>
        <section className="section_name">
          <label>{`${language ? "Name" : "Nombre"}`}</label>
          <input
            className="input_name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </section>
        <section className="section_email">
          <label>Email</label>
          <input
            className="input_email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </section>
        <section className="section_description">
          <label>{`${language ? "Message" : "Mensaje"}`}</label>
          <textarea
            className="input_description"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </section>

        <button className="btm_form" type="submit" disabled={state.submitting}>
          {`${language ? "Send" : "Enviar"}`}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
