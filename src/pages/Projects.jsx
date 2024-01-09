import React, { useEffect, useState } from "react";
import "../stylesPages/Proyectos.css";
import experience from "../utils/experience.json";
import projects from "../utils/projects.json";

const Projects = ({ collapsed, language }) => {
  const [countCertificate, setCountCertificate] = useState(1);
  const [countProjects, setCountProjects] = useState(0);
  const [certificate, setCertificate] = useState(
    experience[countCertificate].link
  );
  const [certificatePath, setCertificatePath] = useState(
    experience[countCertificate].path
  );
  const [project, setProject] = useState(projects[countProjects].path);

  const handlePlusCertificate = () => {
    if (countCertificate < experience.length - 1)
      setCountCertificate(countCertificate + 1);
  };

  const handlePlusProject = () => {
    if (countProjects < projects.length - 1)
      setCountProjects(countProjects + 1);
  };

  const handleMinusCertificate = () => {
    if (countCertificate > 0) setCountCertificate(countCertificate - 1);
  };

  const handleMinusProject = () => {
    if (countProjects > 1) setCountProjects(countProjects - 1);
  };

  useEffect(() => {
    setCertificate(experience[countCertificate].link);
    setCertificatePath(experience[countCertificate].path);
  }, [countCertificate]);

  useEffect(() => {
    setProject(projects[countProjects].path);
  }, [countProjects]);

  const Path = certificatePath;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Path;
    link.download = `${experience[countCertificate].title}`;
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
          <h2 className="title__experience">{`${
            language ? "Experience" : "Experiencia"
          }`}</h2>
          <div className="carrusel">
            <i
              onClick={handleMinusCertificate}
              className="bx bx-chevrons-left"
            ></i>
            <img className="img__experience" src={certificate} alt="" />
            <i onClick={handlePlusCertificate} className="bx bx-chevrons-right"></i>
          </div>
          <button onClick={handleDownload} className="btn__experience">
            {`${language ? "Discharge" : "Descargar"}`}
          </button>
        </section>

        <section className="projects">
          <h2 className="title__projects">
            {`${language ? "Projects" : "Proyectos"}`}
          </h2>
          <div className="carrusel">
            <i onClick={handleMinusProject} className="bx bx-chevrons-left"></i>
            <img className="img__project" src={project} alt="" />
            <i onClick={handlePlusProject} className="bx bx-chevrons-right"></i>
          </div>
          <a href={projects[countProjects].link} target="_blank">
            <button className="btn__projects">{`${
              language ? "Go to site" : "Ir al sitio"
            }`}</button>
          </a>
        </section>
      </section>
    </article>
  );
};

export default Projects;
