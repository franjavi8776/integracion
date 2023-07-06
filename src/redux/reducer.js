import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };
    case ORDER:
      const orderFavorites = [...state.myFavorites];

      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? orderFavorites.sort((a, b) => a.id - b.id)
            : orderFavorites.sort((a, b) => b.id - a.id),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
