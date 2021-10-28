import {
  GET_LISTS,
  ADD_LIST,
  DELETE_LIST,
  UPDATE_LIST,
} from "../actions/types";
import ListService from "../service/listService";

export const getLists = () => async (dispatch) => {
  try {
    const res = await ListService.getLists();

    dispatch({
      type: GET_LISTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addList = (data) => async (dispatch) => {
  try {
    const res = await ListService.addList(data);

    dispatch({
      type: ADD_LIST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeList = (id) => async (dispatch) => {
  try {
    const res = await ListService.removeList(id);

    dispatch({
      type: DELETE_LIST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateList = (data, id) => async (dispatch) => {
  try {
    const res = await ListService.updateList(data, id);

    dispatch({
      type: UPDATE_LIST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
