import React, { useEffect, useState } from "react";
import api from "./src/api";
import useFetchList from "./src/hooks/useFetchList";
import useQuery from "./src/hooks/useQuery";
//title ; tiêu đề
// price : giá
// rating : đánh giá
// order :đặt hàng
// query : truy vấn
//params : thông số
const sortOptions = [
  { label: "Sắp xếp", value: {} },
  { label: "Giá tăng dần ", value: { sortBy: "price" }, order: "asc" },
  { label: "Giá giảm dần ", value: { sortBy: "price" }, order: "desc" },
  { label: " Tên từ a-z  ", value: { sortBy: "title" }, order: "asc" },
  { label: " Tên từ z-a ", value: { sortBy: "title" }, order: "desc" },
  {
    label: " Lượt đánh giá cao nhất ",
    value: { sortBy: "rating" },
    order: "desc",
  },
];
const ProductList = () => {
  const [query, updateQuery, resetQuery] = useQuery({
    q: "",
    page: 1,
    limit: 12,
    sortBy: "title",
    order: "asc",
  });
  const [data] = useFetchList("products", query, {});

  const handleSearch = (data) => {
    updateQuery({ q: data, page: 1 });
  };
  const handleSort = (indexOpt) => {
    const opt = sortOptions[indexOpt];
    updateQuery({ ...opt.value, order: opt.order, page: 1 });
  };
  const handlePage = (newPage) => {
    updateQuery({ page: newPage });
  };
  const handleLimit = (limit) => {
    updateQuery({ limit, page: 1 });
  };
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <p>
        <span>Hiển thị tối đa</span>
        <select
          name=""
          id=""
          onChange={(e) => handleLimit(e.target.value)}
          value={query.limit}
        >
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="30">30</option>
          <option value="all">all</option>
        </select>
        <span>sản phẩm</span>
      </p>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <select name="" id="" onChange={(e) => handleSort(e.target.value)}>
        {sortOptions.map((opt, index) => (
          <option key={index} value={index}>
            {opt.label}
          </option>
        ))}
      </select>
      <div>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Giá : {item.price}</p>
            </div>
          ))}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => handlePage(query.page - 1)}
        disabled={query.page === 1}
      >
        Previous
      </button>
      <span>Page : {query.page}</span>
      <button
        className="btn btn-primary"
        onClick={() => handlePage(query.page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default ProductList;
//Tư duy thực sự biết code :
//Tách các logic của bài toán ra (Lọc phân trang filter).
//Componnet chỉ làm công việc của UI
// Phân trang
// Tìm trang
// Sắp sếp
