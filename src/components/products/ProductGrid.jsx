import React from "react";
import styled from "@emotion/styled";
import ProductCard from "./ProductCard";
import { message } from "antd";

const ProductGridWrapper = styled.div`
  flex: 1;
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // gap: 14px;
  // margin: 5px 0px;
`;

const PageButton = styled.button`
  margin: 0px 20px;
  padding: 3px 20px;
  font-size: 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;

  &.btn-primary {
    background-color: #007bff;
  }

  &.btn-info {
    background-color: #17a2b8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ProductGrid = ({ products, query, total, updateQuery }) => {
  const handlePage = (newPage) => {
    const maxPage = Math.ceil(total / query.limit);
    if (newPage > maxPage) {
      message.warning("Không còn sản phẩm nào để hiển thị.");
      return;
    }
    updateQuery({ page: newPage });
  };

  return (
    <>
      <div>
        <ProductGridWrapper>
          {products.map((product, index) => (
            <ProductCard
              key={product.id || product._id || `product-${index}`}
              product={product}
            />
          ))}
        </ProductGridWrapper>

        <PaginationWrapper>
          <PageButton
            className="btn-primary"
            onClick={() => handlePage(query.page - 1)}
            disabled={query.page === 1}
          >
            Prev
          </PageButton>

          <span>Page: {query.page}</span>

          <PageButton
            className="btn-info"
            onClick={() => handlePage(query.page + 1)}
          >
            Next
          </PageButton>
        </PaginationWrapper>
      </div>
    </>
  );
};

export default ProductGrid;
