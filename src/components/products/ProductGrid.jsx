import React from "react";
import styled from "@emotion/styled";
import ProductCard from "./ProductCard";

const ProductGridWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ProductGrid = ({ products }) => {
  return (
    <ProductGridWrapper>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <div
          style={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem" }}
        >
          <h6>No products found.</h6>
        </div>
      )}
    </ProductGridWrapper>
  );
};

export default ProductGrid;
