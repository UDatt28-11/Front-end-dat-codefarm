import React, { useRef } from "react";
import styled from "@emotion/styled";

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

const ProductCard = styled.div`
  min-width: 260px;
  background: #fff;
  border-radius: 16px;

  overflow: hidden;
  text-align: center;
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  h3 {
    font-size: 1rem;
    margin: 12px 0 4px 0;
  }
  p {
    color: #222;
    font-weight: 600;
    margin-bottom: 12px;
  }
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
          {products.map((item) => (
            <ProductCard key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}₫</p>
            </ProductCard>
          ))}
        </ProductSlider>
        <NavButton onClick={() => scroll(300)}>&gt;</NavButton>
      </CarouselWrapper>
    </SectionWrapper>
  );
}
