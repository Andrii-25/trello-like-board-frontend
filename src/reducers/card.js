import {
  GET_CARDS,
  UPDATE_CARD_LIST_ID,
  UPDATE_CARD,
  ADD_CARD,
  DELETE_CARD,
} from "../actions/types";

const initialState = [];

function cardReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CARDS:
      return payload;

    case ADD_CARD:
      return [...state, payload];

    case DELETE_CARD:
      return state.filter(({ id }) => id !== payload.id);

    case UPDATE_CARD_LIST_ID:
      return state.map((card) => {
        if (card.id === payload.id) {
          return {
            ...card,
            ...payload,
          };
        } else {
          return card;
        }
      });

    case UPDATE_CARD:
      return state.map((card) => {
        if (card.id === payload.id) {
          return {
            ...card,
            ...payload,
          };
        } else {
          return card;
        }
      });

    default:
      return state;
  }
}

export default cardReducer;
