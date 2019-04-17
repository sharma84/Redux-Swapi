import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetching: false, //or isLoading
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        error: "",
        fetching: true
      };

    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload 
      };

    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };

    default:
      return state;
  }
};
