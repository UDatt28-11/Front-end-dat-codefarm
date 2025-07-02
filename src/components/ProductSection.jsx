import React, { useRef } from "react";
import styled from "@emotion/styled";
import ProductCard from "./products/ProductCard";
// Đảm bảo đường dẫn đúng

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 16px;
`;

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const ProductSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 24px;
  scroll-behavior: smooth;
  padding-bottom: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductCardWrapper = styled.div`
  min-width: 260px;
  flex-shrink: 0;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 2;

  &:first-of-type {
    left: -18px;
  }

  &:last-of-type {
    right: -18px;
  }
`;

export default function ProductSection({ title, products }) {
  const sliderRef = useRef(null);

  const scroll = (offset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += offset;
    }
  };

  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <CarouselWrapper>
        <NavButton onClick={() => scroll(-300)}>&lt;</NavButton>
        <ProductSlider ref={sliderRef}>
          {products.map((product) => (
            <ProductCardWrapper key={product._id}>
              <ProductCard product={product} />
            </ProductCardWrapper>
          ))}
        </ProductSlider>
        <NavButton onClick={() => scroll(300)}>&gt;</NavButton>
      </CarouselWrapper>
    </SectionWrapper>
  );
}
