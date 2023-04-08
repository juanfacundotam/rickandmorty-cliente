import React from "react";
import Cards from "../../components/Cards/Cards";
import style from "../Home/Home.module.css";
import { motion } from "framer-motion";

const Home = ({ characters, closeCharacter }) => {
  return (
    // initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} animation={{y:30}} transition={{duration: 1}}
    // initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth}}  transition={{duration: 0.1}}
    <motion.div className={style.divCards}  animate={{y:20}}   transition={{duration: 0.3}}>
      <Cards characters={characters} closeCharacter={closeCharacter} />
    </motion.div>
  );
};

export default Home;
