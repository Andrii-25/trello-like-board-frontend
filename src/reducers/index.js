import { combineReducers } from "redux";
import cards from "./card";
import lists from "./list";

export default combineReducers({
  lists,
  cards,
});
