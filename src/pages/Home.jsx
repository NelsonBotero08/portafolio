import React from "react";
import "../stylesPages/Home.css";

const Home = ({ collapsed }) => {
  const cvPath = "../assets/NelsonBoteroCV.pdf";

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "NelsonBoteroCV.pdf";
    link.click();
  };
  return (
    <section className="div__container--home">
      <h2
        className={`${
          collapsed ? "title_collapsed--home" : "title_expanded--home"
        }`}
      >
        Nelson Arturo Botero Sabogal
      </h2>
      <h3
        className={`${
          collapsed ? "falling__h3--collapsed" : "falling__h3--expanded"
        }`}
      >
        Desarrollador FullStack
      </h3>
      <section className="section__contact">
        <a href="https://www.linkedin.com/in/nbotero081518" target="_blank">
          <i class="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://github.com/NelsonBotero08" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
      </section>
      <section className="section__cv">
        <button className="btn__cv" onClick={handleDownloadCV}>
          Descargar CV
        </button>
      </section>
    </section>
  );
};

export default Home;
