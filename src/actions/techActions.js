import { GET_TECHS, CREATE_TECH, DELETE_TECH, SET_LOADING } from "./Types";

export const getTech = () => async dispatch => {
  setLoading();
  const res = await fetch("http://localhost:5000/techs");
  const data = await res.json();

  dispatch({
    type: GET_TECHS,
    payload: data
  });
};

export const createTech = tech => async dispatch => {
  const res = await fetch("http://localhost:5000/techs", {
    method: "POST",
    body: JSON.stringify(tech),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();

  dispatch({
    type: CREATE_TECH,
    payload: data
  });
};

export const deleteTech = id => async dispatch => {
  await fetch(`http://localhost:5000/techs/${id}`, {
    method: "DELETE"
  });

  dispatch({
    type: DELETE_TECH,
    payload: id
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
