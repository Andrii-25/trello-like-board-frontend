import http from "../http-common";

class ListService {
  getLists() {
    return http.get("/lists");
  }

  addList(data) {
    return http.post("/lists", data);
  }

  removeList(id) {
    console.log(id);
    return http.delete(`/lists/${id}`);
  }

  updateList(data, id) {
    return http.patch(`/lists/${id}`, data);
  }
}

export default new ListService();
