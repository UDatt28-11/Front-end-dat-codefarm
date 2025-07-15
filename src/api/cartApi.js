import api from ".";

export const getUserCart = () => api.get("/api/cart");
export const addCart = (body) => api.post("/api/cart", body);
export const updateCart = (id, body) => api.patch(`/api/cart/${id}`, body);
export const removeCartItem = (id) => api.delete(`/api/cart/${id}`);
export const clearCart = () => api.delete("/api/cart");
