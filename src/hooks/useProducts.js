import { useEffect, useState } from "react";
import axios from "axios";
import api from "../api";

const useProducts = (query, config) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = new URLSearchParams(query).toString();
        const res = await api.get(`api/products?${queryString}`, config);
        console.log(res.data);
        setProducts(res.data.data || []);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err);
      }
    };
    fetchData();
  }, [JSON.stringify(query)]);

  return products;
};

export default useProducts;
