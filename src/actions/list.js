import { GET_LISTS } from "../actions/types";
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
