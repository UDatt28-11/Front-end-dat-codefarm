import api from ".";

export const getAllUsers = () => api.get("/api/user");
export const getUsersById = (id) => api.get(`/api/user/${id}`);
