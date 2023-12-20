import React from "react";
import "../stylesPages/Home.css";

const Home = ({ collapsed, language }) => {
  const cvPath = "../../public/experence/nelsonBoteroCV.pdf";

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "NelsonBoteroCV.pdf";
    link.click();
  };
  return (
    <section
      className={`${
        collapsed ? "div__container--home" : "div__container--home--expanded"
      }`}
    >
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
        Developer FullStack
      </h3>
      <section className="section__contact">
        <a href="https://www.linkedin.com/in/nbotero081518" target="_blank">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://github.com/NelsonBotero08" target="_blank">
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://web.whatsapp.com/send?phone=+573196675159&text=Me%20interesa%20tu%20CV"
          target="_blank"
        >
          <i class="bx bxl-whatsapp"></i>
        </a>
      </section>
      <section className="section__cv">
        <button className="btn__cv" onClick={handleDownloadCV}>
          {language ? "Discharge CV" : "Descargar CV"}
        </button>
      </section>
    </section>
  );
};

export default Home;
