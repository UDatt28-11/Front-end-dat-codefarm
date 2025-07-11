import { useEffect, useState } from "react";
import api from "../api";
import useProducts from "./useProducts";

const useFetchList = (path, query, config = {}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const skip = (query.page - 1) * query.limit;
      query.skip = skip;
      // delete query.page;
      const queryString = new URLSearchParams(query).toString();
      const res = await api.get(`${path}?${queryString}`, config);
      setProducts(res.data.data);
    };
    fetchApi();
  }, [path, JSON.stringify(query), JSON.stringify(config)]);
  return [products];
};

export default useFetchList;
