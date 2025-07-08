import { useEffect, useState } from "react";
import axios from "axios";
import api from "../api";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("api/products");
        setProducts(res.data.data || []);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err);
      }
    };

    fetchData();
  }, []);

  return products;
};

export default useProducts;
