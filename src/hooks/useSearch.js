/**
 * input :keywword
 * output : danh sách sản phẩm tìm được
 */

import { useState } from "react";

const useSearch = (query = inititalParams) => {
  const inititalParams = {
    // sortBy: "price",
    // order: "asc",
    // limit: 12,
    // page: 1,
  };
  const useQuery = (query = inititalParams) => {
    const [params, setParams] = useState(query);

    const resetParams = () => {
      setParams(inititalParams);
    };

    const updateParams = (query) => {
      setParams((prev) => ({
        ...prev,
        ...query,
      }));
    };
  };
  return [params, updateParams, resetParams];
};
export default useSearch;
