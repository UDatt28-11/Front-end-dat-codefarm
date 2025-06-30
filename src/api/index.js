import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-dat-codefarm-k01.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  function (config) {
    console.log(config);
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default api;
