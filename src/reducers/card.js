import { GET_CARDS, UPDATE_CARD } from "../actions/types";

const initialState = [];

function cardReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CARDS:
      return payload;

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
