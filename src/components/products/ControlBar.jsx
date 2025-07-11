import React from "react";
import styled from "@emotion/styled";
import { FaTh, FaBars } from "react-icons/fa";
import useQuery from "./../../hooks/useQuery.js";
import useFetchList from "./../../hooks/useFetchList.js";
import useProducts from "../../hooks/useProducts.js";

const ControlBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ViewMode = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ViewButton = styled.button`
  background: ${({ active }) => (active ? "#1a73e8" : "#e9ecef")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ? "#1557b0" : "#d3d6da")};
    transform: translateY(-2px);
  }
`;

const SortBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Select = styled.select`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background: white;
  font-size: 0.9rem;
`;
const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  max-width: 600px;

  input {
    border: none;
    outline: none;
    width: 400px;
    font-size: 14px;
    background-color: transparent;
    color: #333;
  }
`;

const ControlBar = ({ query, updateQuery }) => {
  const sortOPtions = [
    { label: "Sắp Xếp", value: {} },
    { label: "Giá Tăng Dần", value: { sortBy: "price", order: "asc" } },
    { label: "Giá Giảm Dần", value: { sortBy: "price", order: "desc" } },
    { label: "Tên A-Z", value: { sortBy: "title", order: "asc" } },
    { label: "Tên từ Z-A", value: { sortBy: "title", order: "desc" } },
    {
      label: "Lượt Đánh Giá Cao Nhất",
      value: { sortBy: "rating", order: "desc" },
    },
  ];
  // Search Product
  const [products] = useProducts("/api/products", query, {});
  const handleSearch = (search) => {
    updateQuery({ q: search, page: 1 });
  };
  return (
    <>
      <ControlBarWrapper>
        <ViewMode>
          <ViewButton>
            <FaTh />
          </ViewButton>
          <ViewButton>
            <FaBars />
          </ViewButton>
          <ViewButton>
            <label>
              <input type="checkbox" />
              <span style={{ marginLeft: "8px" }}>
                Show only products on sale
              </span>
            </label>
          </ViewButton>
          <div>
            <SearchLabel>
              <input
                type="text"
                placeholder="Tìm Kiếm Sản Phẩm"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </SearchLabel>
          </div>
        </ViewMode>
        <SortBlock>
          <span>Sort By</span>
          <Select onChange={(e) => handleSort(e.target.value)}>
            {sortOPtions.map((opt, index) => (
              <option key={index} value={index}>
                {opt.label}
              </option>
            ))}
          </Select>
        </SortBlock>
      </ControlBarWrapper>
    </>
  );
};

export default ControlBar;
