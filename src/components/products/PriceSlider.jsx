import React from "react";
import styled from "@emotion/styled";

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
  }
`;

const PriceLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const PriceSlider = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  return (
    <>
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
    </>
  );
};

export default PriceSlider;
