import {
  GET_TECHS,
  CREATE_TECH,
  DELETE_TECH,
  SET_LOADING
} from "../actions/Types";

const initialState = {
  techs: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };

    case CREATE_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };

    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload)
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
