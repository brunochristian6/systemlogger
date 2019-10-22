import {
  SET_LOADING,
  GET_LOGS,
  CREATE_LOG,
  EDIT_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS
} from "./Types";

export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    console.log(`error ao obter dados ${error}`);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
export const createLog = log => async dispatch => {
  setLoading();
  const res = await fetch("http://localhost:5000/logs", {
    method: "POST",
    body: JSON.stringify(log),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();

  dispatch({
    type: CREATE_LOG,
    payload: data
  });
};

export const deleteLog = id => async dispatch => {
  await fetch(`http://localhost:5000/logs/${id}`, {
    method: "DELETE"
  });

  dispatch({
    type: DELETE_LOG,
    payload: id
  });
};

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const editLog = log => async dispatch => {
  const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
    method: "PUT",
    body: JSON.stringify(log),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  dispatch({
    type: EDIT_LOG,
    payload: data
  });
};

export const searchLogs = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (error) {
    console.log(`error ao obter dados ${error}`);
  }
};
