import api from ".";

// ✅ Đúng với backend bạn đang dùng
export const loginApi = (data) => api.post("/api/auth/login", data);
export const registerApi = (data) => api.post("/api/auth/register", data);
export const getProfile = (userId) => api.get(`/api/users/${userId}`);
