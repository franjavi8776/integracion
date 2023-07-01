import React from "react";
import style from "./about.module.css";

const About = () => {
  return (
    <div className={style.divAbout}>
      <div className={style.contentAbout}>
        <h2>Nombre: Francisco Villarroel</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi
          deserunt delectus esse nulla magni autem inventore, assumenda libero.
          Eaque alias in dolorem at obcaecati numquam nostrum nihil itaque amet?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          laborum aperiam in, quaerat fuga eaque, ipsum quae officiis, eos esse
          recusandae incidunt beatae doloremque consequatur aliquid omnis unde a
          quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
          odit doloribus, explicabo, nulla consectetur sit quaerat asperiores,
          dolore rerum id temporibus ab laudantium. Magni sint rerum corporis
          vel aspernatur.
        </p>
      </div>
      <div className={style.divImg}>
        <img className={style.imgAbout} />
      </div>
    </div>
  );
};

export default About;
