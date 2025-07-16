import React, { useRef } from "react";
import styled from "@emotion/styled";
import ProductCard from "./products/ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ========== Styled Components ==========

const SectionWrapper = styled.section`
  width: 100%;
  padding: 20px 0;
  position: relative;
  overflow: visible;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #222;
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const ProductSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 24px;
  scroll-behavior: smooth;
  padding-bottom: 12px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductCardWrapper = styled.div`
  min-width: 260px;
  flex-shrink: 0;
  scroll-snap-align: start;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 1.25rem;
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 1000;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #eaeaea;
  }

  &:first-of-type {
    left: 16px;
  }

  &:last-of-type {
    right: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// ========== Component ==========

export default function ProductSection({ title, products }) {
  const sliderRef = useRef(null);

  const scroll = (offset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += offset;
    }
  };

  const realProducts = products?.products || [];

  return (
    <SectionWrapper>
      <InnerContainer>
        <SectionTitle>{title}</SectionTitle>
        <CarouselWrapper>
          <ProductSlider ref={sliderRef}>
            {Array.isArray(realProducts) && realProducts.length > 0 ? (
              realProducts.map((product) => (
                <ProductCardWrapper key={product._id}>
                  <ProductCard product={product} />
                </ProductCardWrapper>
              ))
            ) : (
              <div style={{ padding: "1rem", color: "#999" }}>
                Không có sản phẩm nào để hiển thị.
              </div>
            )}
          </ProductSlider>
        </CarouselWrapper>
      </InnerContainer>

      {/* Nút điều hướng ngoài rìa */}
      <NavButton onClick={() => scroll(-300)}>
        <FaChevronLeft />
      </NavButton>
      <NavButton onClick={() => scroll(300)}>
        <FaChevronRight />
      </NavButton>
    </SectionWrapper>
  );
}
