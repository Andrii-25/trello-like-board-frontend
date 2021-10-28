import http from "../http-common";

class CardService {
  getCards() {
    return http.get("/cards");
  }

  addCard(data) {
    return http.post("/cards", data);
  }

  removeCard(id) {
    return http.delete(`/cards/${id}`);
  }

  updateCard(id, data) {
    return http.patch(`/cards?id=${id}`, data);
  }

  updateCardList(id, listId) {
    return http.patch(`/cards/${id}?list_id=${listId}`);
  }
}

export default new CardService();
