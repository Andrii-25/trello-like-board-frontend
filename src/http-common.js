import axios from "axios";

export default axios.create({
  baseURL: "https://trello-like-board.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
