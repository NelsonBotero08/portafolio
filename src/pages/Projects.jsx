import React from "react";
import certificacion from "../../public/Certificacion.jpg";
import "../stylesPages/Proyectos.css";

const Projects = ({ collapsed }) => {
  const CertificatePath = "../../Certificacion.pdf";

  const handleCertificate = () => {
    const link = document.createElement("a");
    link.href = CertificatePath;
    link.download = "Certificacion_NelsonBotero.pdf";
    link.click();
  };
  return (
    <article
      className={`${
        collapsed
          ? "proyect__containe--collapsed"
          : "proyect__containe--expanded"
      }`}
    >
      <section className="section__experience--projects">
        <section className="experience">
          <h2 className="title__experience">Experiencia</h2>
          <img
            className="img__experience"
            src={certificacion}
            alt="Certificación Centic"
          />

          <button className="btn__experience" onClick={handleCertificate}>
            Descargar
          </button>
        </section>

        <section className="projects">
          <h2 className="title__projects">Proyectos</h2>
        </section>
      </section>
    </article>
  );
};

export default Projects;
