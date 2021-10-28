import axios from "axios";

class ListService {
  getLists() {
    // return axios.get(`${process.env.API_URL}lists`);
    return axios.get("http://localhost:8000/lists");
  }
}

export default new ListService();
