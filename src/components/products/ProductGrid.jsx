import React from "react";
import styled from "@emotion/styled";
import ProductCard from "./ProductCard";

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
  gap: 16px;
  margin-top: 24px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
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

const ProductGrid = ({ products }) => {
  return (
    <>
      <div>
        <ProductGridWrapper>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductGridWrapper>
        <PaginationWrapper>
          <PageButton
            className="btn-primary"
            // onClick={() => handlePage(query.page - 1)}
            // disabled={query.page === 1}
          >
            Prev
          </PageButton>

          <span>Page : {/* {query.page} */}</span>

          <PageButton
            className="btn-info"
            // onClick={() => handlePage(query.page + 1)}
          >
            Next
          </PageButton>
        </PaginationWrapper>
      </div>
      ;
    </>
  );
};

export default ProductGrid;
