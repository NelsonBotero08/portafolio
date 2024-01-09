import React from "react";
import "../stylesPages/Skills.css";

const Skills = ({ collapsed }) => {
  return (
    <div className="container__skills">
      <div
        className={`${collapsed ? "icon--skills--collapsed" : "icon--skills"}`}
      >
        <i className="bx bxl-vuejs"></i>
        <i className="bx bxl-react"></i>
        <i className="bx bxl-html5"></i>
        <i className="bx bxl-css3"></i>
        <i className="bx bxl-javascript"></i>
        <i className="bx bxl-typescript"></i>
        <i className="bx bxl-nodejs"></i>
        <i className="bx bxl-postgresql"></i>
      </div>
    </div>
  );
};

export default Skills;
