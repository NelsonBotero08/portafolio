import React from "react";
import "../stylesPages/Home.css";

const Home = ({ collapsed }) => {
  return (
    <div className="container">
      <div className="div__container">
        <h2 className={`${collapsed ? "title_collapsed" : "title_expanded"}`}>
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
    </div>
  );
};

export default Home;
