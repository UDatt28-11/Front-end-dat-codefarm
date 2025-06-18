import axios from "axios";

const api = axios.create({
  baseURL: "https://nodejs-react-hl8d.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
