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
            With over a year of experience as a Fullstack developer, I have
            excelled in the educational segment, focusing on the design and
            development of microservices using Node.js. My main focus has been
            creating and optimizing rest APIs and web services to provide
            efficient and scalable solutions. Currently, I am conducting my
            studies at Academlo, where I have successfully completed the
            Fundamentals module and the React module. My goal is to continue my
            training with Node.js to further strengthen my skills and knowledge
            as a Fullstack developer. During my career, I have demonstrated
            strong skills to design and implement technological solutions,
            contributing to the successful development of my education. My
            proactive approach and commitment to excellence have allowed me to
            excel in challenging work environments. I am excited to continue
            growing as a professional, facing new challenges and applying my
            experience to develop innovative and effective solutions.
          </>
        ) : (
          <>
            Con más de un año de experiencia como Desarrollador Fullstack, me he
            destacado en el sector educativo, centrándome en el diseño y
            desarrollo de Microservicios utilizando Node.js. Mi enfoque
            principal ha sido la creación y optimización de API Rest y servicios
            web para proporcionar soluciones eficientes y escalables.
            Actualmente, estoy llevando a cabo mis estudios en Academlo, donde
            he completado con éxito el módulo de fundamentos y el módulo de
            React. Mi objetivo es continuar mi formación con Node.js para
            fortalecer aún más mis habilidades y conocimientos como
            desarrollador Fullstack. Durante mi trayectoria, he demostrado
            habilidades sólidas en el diseño e implementación de soluciones
            tecnológicas, contribuyendo al desarrollo exitoso de proyectos en el
            ámbito educativo. Mi enfoque proactivo y mi compromiso con la
            excelencia me han permitido destacar en entornos de trabajo
            desafiantes. Estoy entusiasmado por seguir creciendo como
            profesional, enfrentando nuevos retos y aplicando mi experiencia
            para desarrollar soluciones innovadoras y eficaces.
          </>
        )}
      </p>
    </div>
  );
};

export default About;
