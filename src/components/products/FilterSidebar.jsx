import React from "react";
import styled from "@emotion/styled";
import PriceSlider from "./PriceSlider";

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
`;

const FilterSidebar = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  return (
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
        <PriceSlider
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
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
              <input type="checkbox" id={brand} />
              <label
                htmlFor={brand}
                style={{ marginLeft: "0.5rem", textTransform: "capitalize" }}
              >
                {brand}
              </label>
            </div>
            <span>12</span>
          </BrandItem>
        ))}
      </FilterBlock>
    </Sidebar>
  );
};

export default FilterSidebar;
