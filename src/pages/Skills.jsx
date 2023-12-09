import React from "react";
import "../stylesPages/Skills.css";

const Skills = ({ collapsed }) => {
  return (
    <div className="container__skills">
      <div
        className={`${collapsed ? "icon--skills--collapsed" : "icon--skills"}`}
      >
        <i class="bx bxl-vuejs"></i>
        <i class="bx bxl-react"></i>
        <i class="bx bxl-html5"></i>
        <i class="bx bxl-css3"></i>
        <i class="bx bxl-javascript"></i>
        <i class="bx bxl-typescript"></i>
        <i class="bx bxl-nodejs"></i>
        <i class="bx bxl-postgresql"></i>
      </div>
    </div>
  );
};

export default Skills;
