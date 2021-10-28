import { GET_LISTS } from "../actions/types";

const initialState = [];

function listReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LISTS:
      return payload;

    default:
      return state;
  }
}

export default listReducer;
