import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import styled from "styled-components";
import styles from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { getFavorites } from "../../redux/actions";
import { useDispatch, useSelector, connect } from "react-redux";
import { motion } from "framer-motion";

// { id, name, species, gender, image, onClose }

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const { allCharacters } = useSelector((state) => state);
  const { myFavorites } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });

  }, [myFavorites]);

  const addFavorite = async () => {
    const { id, name, status, species, gender, origin, image } = props;
    const body = {
      id,
      name,
      status,
      species,
      gender,
      origin: origin.name,
      image,
    };
    console.log(origin.name)
    await axios.post("http://localhost:3001/rickandmorty/fav", body);
    console.log("Adherido a favoritos");

  };

  const deleteFavorite = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    // dispatch(getFavorites());
    alert("Eliminado de los favoritos con exito");
    dispatch(getFavorites())
  };

  const handleFavorite = () => {
    if (isFav) {
      deleteFavorite(props.id);
      setIsFav(false);
    } else {
      addFavorite(props);
      setIsFav(true);
    }
  };

  const handleDelete = () => {
    props.onClose(props.id);
    // props.deleteFavorite(props.id)
    // dispatch(deleteFavorite(props.id));
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
    >
      <div className={styles.divButton}>
        {/* {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
} */}

        <button
          className={`${isFav ? styles.actHeart : styles.desHeart} ${
            styles.heartbtn
          }`}
          onClick={handleFavorite}
        >
          ❤
        </button>

        {pathname !== "/favorites" && (
          <button className={styles.closebtn} onClick={handleDelete}>
            X
          </button>
        )}
      </div>
      <img className={styles.image} src={props.image} alt="Imagen de Rick" />
      <div className={styles.containertitles}>
        <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
          <h2 className={styles.title}>{props.name}</h2>
        </Link>
        <div className={styles.divhab}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
      </div>
    </motion.div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }
// const mapDispatchToProps = (dispatch) => {
// return {
//   deleteFavorite: (id) => {
//     dispatch(deleteFavorite(id))
//   }
// }
// }

//sacar el export de arriba para poner el de abajo
// export default connect(mapStateToProps, mapDispatchToProps)(Card);
