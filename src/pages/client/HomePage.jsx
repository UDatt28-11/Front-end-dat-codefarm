import { useState, useEffect } from "react";
import { getAllProduct } from "../../api/productApi";

import styled from "@emotion/styled";
import HeroSection from "../../components/HeroSection";
import TitleHome from "../../components/TitleHome";
import CategoryShowcase from "../../components/CategoryShowcase";
import ProductSection from "../../components/ProductSection";
import Benefit from "../../components/Benefit";

export const HeroSectionWrapper = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
  margin: 0 30px;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: ${(props) =>
      props.direction === "prev" ? "rotate(-135deg)" : "rotate(45deg)"};
  }

  ${(props) => (props.direction === "prev" ? "left: 0;" : "right: 0;")}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  color: #000;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 60px;
    font-weight: 400;
    margin-bottom: 20px;
    transition: opacity 0.5s ease-in-out;
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 40px;
    color: #666;
    transition: opacity 0.5s ease-in-out;
  }
  a {
    transition: opacity 0.5s ease-in-out;
  }
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0 35px;
  height: 55px;
  background: #000;
  color: #fff;
  font-size: 14px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    background: #333;
  }
`;

export const HeroSlideWrapper = styled.div`
  flex: 1;
  height: 600px;
  position: relative;
  border-radius: 50px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    height: 400px;
  }
`;

export const HeroSlide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const SlideControls = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 2;
`;

export const SlideButton = styled.button`
  height: 15px;
  border-radius: 50%;
  border: 2px solid #000;
  background: ${(props) => (props.active ? "#000" : "transparent")};
  cursor: pointer;

  &:hover {
    background: #000;
  }
`;

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const [slide, setSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data.data));
  }, []);

  const handleSlideClick = (index) => {
    if (!isAnimating && index !== slide) {
      setIsAnimating(true);
      setSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlide((prev) => (prev - 1 + 3) % 3); // 3 banner
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlide((prev) => (prev + 1) % 3);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <main>
      <HeroSection
        slide={slide}
        isAnimating={isAnimating}
        onNext={handleNextClick}
        onPrev={handlePrevClick}
        onSlideClick={handleSlideClick}
      />
      <Benefit />
      <ProductSection products={products} />
      <CategoryShowcase />
      <TitleHome />
    </main>
  );
}
