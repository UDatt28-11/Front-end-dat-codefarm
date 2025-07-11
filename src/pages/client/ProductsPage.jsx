import styled from "@emotion/styled";
import { useState } from "react";
import Breadcrumb from "../../components/products/Breadcrumb";
import ControlBar from "../../components/products/ControlBar";
import FilterSidebar from "../../components/products/FilterSidebar";
import ProductGrid from "../../components/products/ProductGrid";
import useProducts from "../../hooks/useProducts";
import useQuery from "../../hooks/useQuery";
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
  const [query, updateQuery, resetQuery] = useQuery({
    q: "",
    page: 1,
    limit: 9,
    sortBy: "title",
    order: "asc",
  });
  const products = useProducts(query);
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
        query={query}
        updateQuery={updateQuery}
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
