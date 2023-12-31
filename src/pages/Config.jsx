import React, { useState } from "react";
import "../stylesPages/Config.css";

const Config = ({ collapsed, language, setLanguage, theme, setTheme }) => {
  const handleTheme = () => {
    setTheme(!theme);
  };
  const handleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <article
      className={`${collapsed ? "config_collapsed" : "config_expanded"}`}
    >
      <h2 className="config__title">{`${
        language ? "Setting" : "Configuración"
      }`}</h2>
      <section className="section_config section">
        <div className="section_div div">
          <p className=" div_p">{`${language ? "Language" : "Lenguaje"}`}</p>
          <i
            onClick={handleLanguage}
            className={` bx ${language ? "bx-toggle-right" : "bx-toggle-left"}`}
          ></i>
        </div>
        <div className="section_div div">
          <p className=" div_p">{`${language ? "Theme" : "Tema"}`}</p>
          <i
            onClick={handleTheme}
            className={` bx ${theme ? "bx-toggle-right" : "bx-toggle-left"}`}
          ></i>
        </div>
      </section>
    </article>
  );
};

export default Config;
