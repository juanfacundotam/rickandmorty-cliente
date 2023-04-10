import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const RESET_FAVORITES = "RESET_FAVORITES";
export const GET_FAVORITES = "GET_FAVORITES";

// export const addFavorite = (favorite) => {
//   // axios.post(`${URL_BASE}/rickandmorty/fav`, favorite)
//   return { type: ADD_FAVORITE, payload: favorite };
// };

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id };
};

export const getCharacterDetail = (id) => {
  return async function (dispatch) {
    const response = await axios(`/rickandmorty/detail/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data }); //axios devuelve la response, dentro de ella esta data, dentro las propiedades de la api
  };
};

export const getFavorites = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/rickandmorty/userfavs/${id}`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER_CARDS, payload: id };
};

export const resetFavorites = () => {
  return { type: RESET_FAVORITES };
};
