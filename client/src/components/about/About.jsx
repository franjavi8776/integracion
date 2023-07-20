import React from "react";
import style from "./about.module.css";
import image from "../image/me2.jpg";

const About = () => {
  return (
    <div className={style.divAbout}>
      <div className={style.container}>
        <div className={style.subcontainer}>
          <div className={style.card}>
            <div className={style.back}>
              <h2>Nombre: Francisco Villarroel</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                hic itaque iure unde voluptates natus porro, molestiae corporis
                deserunt adipisci nihil saepe numquam, enim sunt doloribus
                debitis dolorum et quo.
              </p>
            </div>
            <div className={style.front}>
              <img src={image} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
