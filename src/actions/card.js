import { GET_CARDS, UPDATE_CARD } from "../actions/types";
import CardService from "../service/cardService";

export const getCards = () => async (dispatch) => {
  try {
    const res = await CardService.getCards();

    dispatch({
      type: GET_CARDS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCard = (id, listId) => async (dispatch) => {
  try {
    const res = await CardService.updateCardList(id, listId);

    dispatch({
      type: UPDATE_CARD,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
