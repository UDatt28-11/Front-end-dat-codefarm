// import { useEffect, useState } from "react";
// import api from "../api";
// const useFetchList = (path, query, config) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   useEffect(() => {
//     const fetchAPI = async () => {
//       const skip = (query.page - 1) * query.limit;
//       query.skip = skip;
//       const queryString = new URLSearchParams(query).toString();
//       const res = await api.get(`${path}/search?${queryString}`, config);
//       setData(res.data.products);
//     };
//     fetchAPI();
//   }, [path, JSON.stringify(query), JSON.stringify(config)]);
//   return [data];
// };
// export default useFetchList;
//useFetchList của file PrdoductLisst.jsx
import { useEffect, useState } from "react";
import api from "../api";
const useFetchList = (path, query) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchList = async () => {
    try {
      setLoading(true);
      let queryString = new URLSearchParams(query).toString();
      const { data } = await api.get(`${path}?${queryString}`);
      setList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.massage || "Failed");
      console.log(error);
    }
  };
  useEffect(() => {
    fetchList();
  }, [JSON.stringify(query)]);
  return [list, loading, error];
};
export default useFetchList;

// import { useEffect, useState } from "react";
// import api from "../api";
// // const params = {
// //   search: "",
// //   sort: "price", // sắp xếp
// //   order: "asc", // đặt hàng
// //   limit: 12, //sản phẩm
// //   skip: 0, // số trang
// // };

// const useFetchListParams = (path, params = {}) => {
//   const [list, setList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const fetchList = async () => {
//     try {
//       setLoading(true);
//       let paramsString = new URLSearchParams(params).toString();
//       paramsString = paramsString.replace("search", "search?q");
//       console.log(paramsString);
//       const { data } = await api.get(`${path}/${paramsString}`);
//       setList(data[path]);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       setError(error.message || "Failed!");
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchList();
//   }, [params.limit, params.page]);
//   return [list, loading, error];
// };
// export default useFetchListParams;
