import React from "react";
// import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { cleanDetail, getCharacterDetail } from "../../redux/actions";
import useCharacter from "../../hooks/useCharacter"
import { motion } from "framer-motion";


const Detail = () => {
  //Crearemos un hook de hook
  const character = useCharacter();
  // const character = useSelector((state) => state.characterDetail);
  // const { detailId } = useParams();
  // const dispatch = useDispatch();
  // console.log(detailId);
  // console.log(character.name)

  // useEffect(() => {
  //   dispatch(getCharacterDetail(detailId));
  //   return () => {
  //     dispatch(cleanDetail());
  //   }
  // }, [detailId]);

  return (
    <motion.div className={style.divDetail} initial={{opacity: 0}}
    animate={{y: "30px", opacity:1}}
    transition={{duration: 0.7}}>
      {character.name ? (
        <>
          <div className={style.divText}>
            <div className={style.divButton}>
              <Link to={"/home"}>
                <button className={style.button}>&lt;&lt;</button>
              </Link>
            </div>
            <h1>{character.name}</h1>
            <h3>{character.status}</h3>
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.origin?.name}</h3>
          </div>
          <div className={style.divImg}>
            <img src={character.image} alt="Foto Personaje" />
          </div>
        </>
      ) : (
        <div className={style.divLoader}>
          <div className={style.customLoader}></div>
        </div>
      )}
    </motion.div>
  );
};

export default Detail;
