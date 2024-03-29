import React, { useEffect, useState } from "react";
import "../stylesPages/Home.css";
import CV from "../utils/experience.json";

const Home = ({ collapsed, language }) => {
  const [whatsappLink, setWhatsAppLink] = useState("#");

  useEffect(() => {
    const isMobileDevice = () =>
      window.matchMedia("(max-width: 767px)").matches;

    const link = isMobileDevice()
      ? "whatsapp://send?phone=+573196675150&text=Me%20interesa%20tu%20CV"
      : "https://web.whatsapp.com/send?phone=+573196675150&text=Me%20interesa%20tu%20CV";

    setWhatsAppLink(link);
  }, []);

  const cvPath = CV[0].path;

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
        <a
          href="https://www.linkedin.com/in/nbotero081518"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a
          href="https://github.com/NelsonBotero08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-whatsapp"></i>
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
