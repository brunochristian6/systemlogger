import {
  SET_LOADING,
  GET_LOGS,
  CREATE_LOG,
  EDIT_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS
} from "../actions/Types";

const initialState = {
  logs: null,
  current: null,
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };

    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload
      };
    case CREATE_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    case EDIT_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload)
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
