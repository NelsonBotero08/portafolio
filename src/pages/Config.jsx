import React, { useState } from "react";
import "../stylesPages/Config.css";

const Config = ({ collapsed, setLanguage }) => {
  const [changeLanguage, setChangeLanguage] = useState(false);

  const handleLanguage = () => {
    const newLanguageValue = !changeLanguage;

    setChangeLanguage(newLanguageValue);
    setLanguage(newLanguageValue);
  };

  return (
    <article
      className={`${collapsed ? "config_collapsed" : "config_expanded"}`}
    >
      <h2 className="config__title">Configuración</h2>
      <section className="section_config section">
        <div className="section_div div">
          <p className=" div_p">Lenguaje</p>
          <i
            onClick={handleLanguage}
            class={` bx ${
              changeLanguage ? "bx-toggle-right" : "bx-toggle-left"
            }`}
          ></i>
        </div>
        <div className="section_div div">
          <p className=" div_p">Tema</p>
          <i class="bx bx-toggle-left"></i>
        </div>
      </section>
    </article>
  );
};

export default Config;
