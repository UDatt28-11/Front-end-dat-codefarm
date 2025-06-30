import api from ".";

export const createProduct = (data) => api.post("/products", data); // Them san pham
export const getAllProduct = () => api.get("/products"); // Hien thi tat ca san pham
export const getProductDetail = (id) => api.get(`/products/${id}`); // Hien thi product chi tiet
export const updateProduct = (id, data) => api.patch(`/products/${id}`, data); // Update
export const deleteProduct = (id) => api.delete(`/products/${id}`); //xoa
