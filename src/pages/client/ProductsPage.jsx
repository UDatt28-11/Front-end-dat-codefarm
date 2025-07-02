import React, { useState } from "react";
import ControlBar from "../../components/products/ControlBar";
import FilterSidebar from "../../components/products/FilterSidebar";
import ProductGrid from "../../components/products/ProductGrid";
import Breadcrumb from "../../components/products/Breadcrumb";
import useProducts from "../../hooks/useProducts";
import styled from "@emotion/styled";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const TitleBlock = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h2`
  font-weight: bold;
`;
const ProductsPage = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  const [viewMode, setViewMode] = useState("grid");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("all");

  const products = useProducts();
  const filteredProducts =
    filter === "sale"
      ? products.filter((p) => p.sale)
      : filter === "new"
      ? products.filter((p) => !p.sale)
      : products;

  return (
    <Container>
      <TitleBlock>
        <PageTitle>Cửa Hàng</PageTitle>
        <Breadcrumb />
      </TitleBlock>

      <ControlBar
        viewMode={viewMode}
        setViewMode={setViewMode}
        sort={sort}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
      />

      <Layout>
        <FilterSidebar
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
        <ProductGrid products={filteredProducts} />
      </Layout>
    </Container>
  );
};

export default ProductsPage;
