import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://back-end-dat-codefarm-k01.onrender.com/api/products"
        );
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
