import api from ".";

export const createProduct = (data) => api.post("/api/products", data); // Them san pham
export const getAllProduct = () => api.get("/api/products"); // Hien thi tat ca san pham
export const getProductDetail = (id) => api.get(`/api/products/${id}`); // Hien thi product chi tiet
export const updateProduct = (id, data) =>
  api.patch(`/api/products/${id}`, data); // Update
export const deleteProduct = (id) => api.delete(`/api/products/${id}`); //xoa
