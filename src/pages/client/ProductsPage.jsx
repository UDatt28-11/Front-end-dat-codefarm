import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { FaHeart, FaRedo, FaTh, FaBars } from "react-icons/fa";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;
const SortBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ControlBar = styled.div`
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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
const Select = styled.select`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #ced4da;
  background: white;
  font-size: 0.9rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1a73e8;
    box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.2);
  }
`;

const TitleBlock = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h2`
  font-weight: bold;
`;

const Breadcrumb = styled.nav`
  font-size: 0.875rem;
  ol {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    gap: 0.5rem;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 25%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FilterBlock = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 2rem;
`;

const FilterTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TypeItem = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

const SizeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SizeItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 9999px;
  padding: ${({ size }) => (size === "Freesize" ? "0.5rem 1rem" : "1rem")};
  width: ${({ size }) => (size === "Freesize" ? "auto" : "44px")};
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RangeWrapper = styled.div`
  position: relative;
  height: 40px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: #000;
  border-radius: 5px;
  outline: none;
  position: absolute;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: black;
    cursor: pointer;
  }
`;

const PriceLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const ColorItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  gap: 0.5rem;
`;

const ColorDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background-color: ${(props) => props.color};
`;

const BrandItem = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  align-items: center;
  cursor: pointer;
`;

const ProductGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const ProductCard = styled.div`
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 0.75rem;
`;

const Badge = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background-color: ${(props) => (props.sale ? "red" : "green")};
  color: white;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 9999px;
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const CardBody = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.h6`
  margin-bottom: 0.5rem;
`;

const PriceBlock = styled.div`
  margin-bottom: 0.5rem;
  span {
    margin-left: 0.5rem;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  border: 1px solid;
  background: transparent;
  cursor: pointer;

  ${(props) =>
    props.primary
      ? `border-color: #0d6efd; color: #0d6efd;`
      : `border-color: #333; color: #333;`}
`;

const ProductsPage = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  const [viewMode, setViewMode] = useState("grid");
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://back-end-dat-codefarm-k01.onrender.com/api/products"
        );
        setProducts(res.data.data || []);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);

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
        <Breadcrumb>
          <ol>
            <li>
              <a href="/">Trang Chủ</a> /
            </li>
            <li>Cửa Hàng</li>
          </ol>
        </Breadcrumb>
      </TitleBlock>
      <div>
        <ControlBar>
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
              <span style={{ marginLeft: "8px" }}>
                Show only products on sale
              </span>
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
        </ControlBar>
      </div>
      <Layout>
        {/* Sidebar */}
        <Sidebar>
          <FilterBlock>
            <FilterTitle>Products Type</FilterTitle>
            {[
              "t-shirt",
              "dress",
              "top",
              "swimwear",
              "shirt",
              "underwear",
              "sets",
              "accessories",
            ].map((type) => (
              <TypeItem key={type}>
                <span>{type}</span>
                <span>6</span>
              </TypeItem>
            ))}
          </FilterBlock>

          <FilterBlock>
            <FilterTitle>Size</FilterTitle>
            <SizeList>
              {["XS", "S", "M", "L", "XL", "2XL", "Freesize"].map((size) => (
                <SizeItem key={size} size={size}>
                  {size}
                </SizeItem>
              ))}
            </SizeList>
          </FilterBlock>
          <FilterBlock>
            <FilterTitle>Price Range</FilterTitle>
            <RangeWrapper>
              <StyledRange
                type="range"
                min="0"
                max="300"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
              <StyledRange
                type="range"
                min="0"
                max="300"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </RangeWrapper>
            <PriceLabels>
              <span>Min price: ${minPrice}</span>
              <span>Max price: ${maxPrice}</span>
            </PriceLabels>
          </FilterBlock>

          <FilterBlock>
            <FilterTitle>Colors</FilterTitle>
            <SizeList>
              {[
                { name: "pink", color: "#F4C5BF" },
                { name: "red", color: "red" },
                { name: "green", color: "green" },
                { name: "yellow", color: "yellow" },
                { name: "purple", color: "purple" },
                { name: "black", color: "black" },
                { name: "white", color: "#F6EFDD" },
              ].map((c) => (
                <ColorItem key={c.name}>
                  <ColorDot color={c.color} />
                  <span>{c.name}</span>
                </ColorItem>
              ))}
            </SizeList>
          </FilterBlock>

          <FilterBlock>
            <FilterTitle>Brands</FilterTitle>
            {["adidas", "hermes", "zara", "nike", "gucci"].map((brand) => (
              <BrandItem key={brand}>
                <div>
                  <input type="checkbox" id={brand} name={brand} />
                  <label
                    htmlFor={brand}
                    style={{
                      marginLeft: "0.5rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {brand}
                  </label>
                </div>
                <span>12</span>
              </BrandItem>
            ))}
          </FilterBlock>
        </Sidebar>

        {/* Product List */}
        <div>
          <ProductGrid>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, index) => (
                <ProductCard key={item._id || index}>
                  <ImageWrapper>
                    <Badge sale={item.sale}>{item.sale ? "SALE" : "NEW"}</Badge>
                    <ActionButtons>
                      <IconButton>
                        <FaHeart />
                      </IconButton>
                      <IconButton>
                        <FaRedo />
                      </IconButton>
                    </ActionButtons>
                    <ProductImage src={item.thumbnail} alt={item.name} />
                  </ImageWrapper>
                  <CardBody>
                    <ProductName>{item.name}</ProductName>
                    <PriceBlock>
                      <strong>${item.price?.toFixed(3)}</strong>
                      {item.oldPrice && (
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#888",
                          }}
                        >
                          ${item.oldPrice.toFixed(3)}
                        </span>
                      )}
                      {item.discount && (
                        <span style={{ color: "green" }}>
                          -{item.discount}%
                        </span>
                      )}
                    </PriceBlock>
                    <ActionGroup>
                      <ActionButton>Quick View</ActionButton>
                      <ActionButton primary>Quick Shop</ActionButton>
                    </ActionGroup>
                  </CardBody>
                </ProductCard>
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  gridColumn: "1 / -1",
                  padding: "2rem",
                }}
              >
                <h6>No products found.</h6>
              </div>
            )}
          </ProductGrid>
        </div>
      </Layout>
    </Container>
  );
};

export default ProductsPage;
