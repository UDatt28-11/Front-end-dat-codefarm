import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8888",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default api;
