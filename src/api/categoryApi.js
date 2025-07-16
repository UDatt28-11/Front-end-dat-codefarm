import api from ".";
export const getAllCategories = () => api.get("/api/categories"); // Hien thi tat ca danh muc
export const getCategoryById = (id) => api.get(`/api/categories/${id}`); // Lấy danh mục theo id
export const createCategory = (body) => api.post("/api/categories", body); // Tạo danh mục mới
// Cập nhật danh mục
export const updatecategory = (id, body) =>
  api.patch(`/categories/${id}`, body);
// xóa cứng danh mục
export const deleteCategory = (id) => api.delete(`/api/categories/${id}`);
//Xóa mền danh mục
export const softDeleteCategory = (id) => api.patch(`/api/categories/${id}`);
//Xóa mền danh mục
export const restoreCategory = (id) => api.patch(`/api/categories/${id}`);
