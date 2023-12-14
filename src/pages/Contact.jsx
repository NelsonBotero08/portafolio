import React from "react";
import "../stylesPages/Contactame.css";
import FormComponent from "../components/Contact/FormComponent";

const Contact = ({ collapsed }) => {
  return (
    <article
      className={`${
        collapsed ? "container__collapsed" : "container__expanded"
      }`}
    >
      <h2>Contactame</h2>
      <p className="p_container">
        "¡Dale vida a tu visión creativa! Contáctame y juntos hagamos realidad
        tu próximo proyecto asombroso."
      </p>
      <FormComponent />
    </article>
  );
};

export default Contact;
