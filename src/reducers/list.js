import {
  GET_LISTS,
  ADD_LIST,
  DELETE_LIST,
  UPDATE_LIST,
} from "../actions/types";

const initialState = [];

function listReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_LISTS:
      return payload;

    case ADD_LIST:
      return [...state, payload];

    case DELETE_LIST:
      return state.filter(({ id }) => id !== payload.id);

    case UPDATE_LIST:
      return state.map((list) => {
        if (list.id === payload.id) {
          return {
            ...list,
            ...payload,
          };
        } else {
          return list;
        }
      });

    default:
      return state;
  }
}

export default listReducer;
