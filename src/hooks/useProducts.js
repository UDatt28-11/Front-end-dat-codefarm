import { useEffect, useState } from "react";
import api from "../api";

const useProducts = (query = {}, config = {}) => {
  const [data, setData] = useState({
    products: [],
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = new URLSearchParams(query).toString();
        const res = await api.get(`/api/products?${queryString}`, config);
        const responseData = res.data.data || {};

        setData({
          products: responseData.products || [],
          total: responseData.total || 0,
        });
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err);
        setData({ products: [], total: 0 });
      }
    };

    fetchData();
  }, [JSON.stringify(query), JSON.stringify(config)]);

  return data;
};

export default useProducts;
