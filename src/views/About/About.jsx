import React, { useState } from "react";
import style from "../About/About.module.css";
import foto from "../../assets/foto.jpg";
import { motion } from "framer-motion";


const About = () => {
  const [imageLoad, setImageLoad] = useState(false);

  const handleImage = () => {
    setImageLoad(true);
  };

  return (
    <motion.div className={style.divAbout} initial={{opacity: 0}}
    animate={{y: "30px", opacity:1}}
    transition={{duration:0.8, delay: 0.1}}>
      {imageLoad ? (
        <>
          <div className={style.divText}>
            <h1>Rick and Morty APP</h1>
            <p>
              Aplicacion WEB interactiva hecha a base de JavaScript - React -
              Redux - Express - SQL.
            </p>
            <h3>Sobre Mí</h3>
            <p>Juan Facundo Tam</p>
            <p>FullStack - SoyHenry</p>
          </div>
          <img
            src={foto}
            className={style.image}
            alt="Imagen del desarrollador"
            onLoad={handleImage}
            style={{ display: imageLoad ? "block" : "none" }}
          />
        </>
      ) : (
        <div className={style.divLoader}>
          <div className={style.customLoader}></div>
          <img
            src={foto}
            className={style.image}
            alt="Imagen del desarrollador"
            onLoad={handleImage}
            style={{ display: "none"  }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default About;
