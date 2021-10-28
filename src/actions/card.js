import {
  GET_CARDS,
  UPDATE_CARD_LIST_ID,
  UPDATE_CARD,
  ADD_CARD,
  DELETE_CARD,
} from "../actions/types";
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

export const updateCardList = (id, listId) => async (dispatch) => {
  try {
    const res = await CardService.updateCardList(id, listId);

    dispatch({
      type: UPDATE_CARD_LIST_ID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateCard = (id, data) => async (dispatch) => {
  try {
    const res = await CardService.updateCard(id, data);

    dispatch({
      type: UPDATE_CARD,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addCard = (data) => async (dispatch) => {
  try {
    const res = await CardService.addCard(data);

    dispatch({
      type: ADD_CARD,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeCard = (id) => async (dispatch) => {
  try {
    const res = await CardService.removeCard(id);

    dispatch({
      type: DELETE_CARD,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
