import React from "react";
import "../stylesPages/About.css";

const About = ({ collapsed }) => {
  return (
    <div className="container__about">
      <h1 className="about__title">Sobre mi</h1>
      <p
        className={`${
          collapsed ? "p__about--collapsep" : "p__about--expanded"
        }`}
      >
        Con más de un año de experiencia como Desarrollador Fullstack, me he
        destacado en el sector educativo, centrándome en el diseño y desarrollo
        de Microservicios utilizando Node.js. Mi enfoque principal ha sido la
        creación y optimización de API Rest y servicios web para proporcionar
        soluciones eficientes y escalables. Actualmente, estoy llevando a cabo
        mis estudios en Academlo, donde he completado con éxito el módulo de
        fundamentos y estoy a punto de finalizar el módulo de React. Mi objetivo
        es continuar mi formación con Node.js para fortalecer aún más mis
        habilidades y conocimientos como desarrollador Fullstack. Durante mi
        trayectoria, he demostrado habilidades sólidas en el diseño e
        implementación de soluciones tecnológicas, contribuyendo al desarrollo
        exitoso de proyectos en el ámbito educativo. Mi enfoque proactivo y mi
        compromiso con la excelencia me han permitido destacar en entornos de
        trabajo desafiantes. Estoy entusiasmado por seguir creciendo como
        profesional, enfrentando nuevos retos y aplicando mi experiencia para
        desarrollar soluciones innovadoras y eficaces.
      </p>
    </div>
  );
};

export default About;
