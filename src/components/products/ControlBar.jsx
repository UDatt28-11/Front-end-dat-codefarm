import React from "react";
import styled from "@emotion/styled";
import { FaTh, FaBars } from "react-icons/fa";

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

const ControlBar = ({
  viewMode,
  setViewMode,
  sort,
  setSort,
  filter,
  setFilter,
}) => {
  return (
    <ControlBarWrapper>
      <ViewMode>
        <ViewButton
          active={viewMode === "grid"}
          onClick={() => setViewMode("grid")}
        >
          <FaTh />
        </ViewButton>
        <ViewButton
          active={viewMode === "list"}
          onClick={() => setViewMode("list")}
        >
          <FaBars />
        </ViewButton>
        <label>
          <input
            type="checkbox"
            checked={filter === "sale"}
            onChange={() => setFilter(filter === "sale" ? "all" : "sale")}
          />
          <span style={{ marginLeft: "8px" }}>Show only products on sale</span>
        </label>
      </ViewMode>

      <SortBlock>
        <span>Sort By</span>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sorting</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </Select>
      </SortBlock>
    </ControlBarWrapper>
  );
};

export default ControlBar;
