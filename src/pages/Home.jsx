import React from "react";
import "../stylesPages/Home.css";

const Home = ({ collapsed }) => {
  return (
    <div className="div__container--home">
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
    </div>
  );
};

export default Home;
