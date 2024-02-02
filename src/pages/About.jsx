import React from "react";
import "../stylesPages/About.css";

const About = ({ collapsed, language }) => {
  return (
    <div className={`container__${collapsed ? "collapsed" : "expanded"}`}>
      <h2 className="about__title">{`${
        language ? "About Me" : "Sobre Mí"
      }`}</h2>
      <p className={`p__about--${collapsed ? "collapsed" : "expanded"}`}>
        {language ? (
          <>
            <p>
              With over a year of experience as a Fullstack Developer, I have
              excelled in the education sector, focusing on the design and
              development of Microservices using Node.js. My primary focus has
              been on creating and optimizing REST APIs and web services to
              provide efficient and scalable solutions.
            </p>
            <p>
              Currently, I have completed my studies at Academlo, where I have
              successfully completed the FullStack Developer Bootcamp. I have
              demonstrated strong skills in designing and implementing
              technological solutions, contributing to the successful
              development of projects in the educational field. My proactive
              approach and commitment to excellence have allowed me to stand out
              in challenging work environments.
            </p>
          </>
        ) : (
          <>
            <p>
              Con más de un año de experiencia como Desarrollador Fullstack, me
              he destacado en el sector educativo, centrándome en el diseño y
              desarrollo de Microservicios utilizando Node.js. Mi enfoque
              principal ha sido la creación y optimización de API Rest y
              servicios web para proporcionar soluciones eficientes y
              escalables.
            </p>
            <p>
              Actualmente, he terminado mis estudios en Academlo, donde he
              completado con éxito el Bootcamp como desarrollador FullStack. He
              demostrado habilidades sólidas en el diseño e implementación de
              soluciones tecnológicas, contribuyendo al desarrollo exitoso de
              proyectos en el ámbito educativo. Mi enfoque proactivo y mi
              compromiso con la excelencia me han permitido destacar en entornos
              de trabajo desafiantes.
            </p>
          </>
        )}
      </p>
    </div>
  );
};

export default About;
