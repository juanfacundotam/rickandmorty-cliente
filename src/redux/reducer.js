import {
  ADD_FAVORITE,
  CLEAN_DETAIL,
  DELETE_FAVORITE,
  FILTER_CARDS,
  GET_CHARACTERS,
  GET_CHARACTER_DETAIL,
  ORDER_CARDS,
  RESET_FAVORITES,
  GET_FAVORITES,
} from "./actions";

const initialState = {
  myFavorites: [],
  characterDetail: {},
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      return { ...state, myFavorites: action.payload, allCharacters:action.payload };

    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload], //necesitamos dos estados que manejen la misma info para hacer los filtrados sin perder el original
      };

    case DELETE_FAVORITE:
      const filtered = state.myFavorites.filter(
        (char) => char.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filtered,
        allCharacters: filtered,
      };

    case GET_CHARACTER_DETAIL:
      return { ...state, characterDetail: action.payload };

    case CLEAN_DETAIL:
      return { ...state, characterDetail: {} };

    //********************************************************************************** */
    case FILTER_CARDS:
      let allCharsFiltered = [];
      if (action.payload !== "Todos") {
        allCharsFiltered = state.allCharacters.filter(
          (char) => char.gender === action.payload
        );        
        console.log("myFavorites")
        console.log(state.myFavorites);
        console.log("characters")
        console.log(state.allCharacters);
        console.log("filtrados");
        console.log(allCharsFiltered)
      } else {
        allCharsFiltered = state.allCharacters;
      }

      return { ...state, myFavorites: allCharsFiltered };



    case RESET_FAVORITES:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    case ORDER_CARDS:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.myFavorites.sort((a, b) => a.id - b.id)
            : state.myFavorites.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
