import http from "../http-common";

class CardService {
  getCards() {
    return http.get("/cards");
  }

  updateCard(id, listId, data) {
    return http.patch(`/cards/${id}?list_id=${listId}`, data);
  }

  updateCardList(id, listId) {
    return http.patch(`/cards/${id}?list_id=${listId}`);
  }
}

export default new CardService();
