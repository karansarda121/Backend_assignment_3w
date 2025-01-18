import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-assignment-3w.onrender.com/api/users",
});

export default api;
