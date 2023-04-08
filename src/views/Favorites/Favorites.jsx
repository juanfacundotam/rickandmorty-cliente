import React, { useEffect } from "react";
import style from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import {
  filterCards,
  getFavorites,
  orderCards,
  resetFavorites,
} from "../../redux/actions";
import { motion } from "framer-motion";

const Favorites = () => {
  // const [guardados, setguardados] = useState([]);
  const { myFavorites } = useSelector((state) => state);
  const { allCharacters } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));

  };
  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };


  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <motion.div
      className={style.divFavorites}
      animate={{ y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className={style.divSelects}>
        <select onChange={handlerOrder} defaultValue="Order">
          <option disabled="disabled" value="Order">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter} defaultValue="Filter">
          <option disabled="disabled" value="Filter">
            Filter By
          </option>
          <option value="Todos">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      <div className={style.divCards}>
        {myFavorites.map((char) => {
          return (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              species={char.species}
              gender={char.gender}
              image={char.image}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Favorites;
