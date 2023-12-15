import React from "react";
import "../stylesPages/Contactame.css";
import FormComponent from "../components/Contact/FormComponent";

const Contact = ({ collapsed, language }) => {
  return (
    <article
      className={`${collapsed ? "contact__collapsed" : "contact__expanded"}`}
    >
      <h2 className="title_contact">{`${
        language ? "Contact me" : "Contactame"
      }`}</h2>
      <p className="p_container">
        {language ? (
          <div>
            "Bring your creative vision to life! Contact me and together let's
            make your next amazing project a reality."
          </div>
        ) : (
          <div>
            "¡Dale vida a tu visión creativa! Contáctame y juntos hagamos
            realidad tu próximo proyecto asombroso."
          </div>
        )}
      </p>
      <FormComponent language={language} />
    </article>
  );
};

export default Contact;
