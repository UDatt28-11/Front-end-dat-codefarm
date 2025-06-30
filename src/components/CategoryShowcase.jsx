import React from "react";
import styled from "@emotion/styled";
import imgcategory from "../assets/images/category/category.jpg";
import imgcategory2 from "../assets/images/category/category2.jpg";

const BannerSection = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  @media (min-width: 768px) {
    padding-top: 5rem;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BannerItem = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 1rem;
  transition: transform 0.5s ease;

  img {
    transition: transform 1s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const BannerContent = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  max-width: 80%;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 9999px;
  border: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CategoryShowcase = () => {
  return (
    <BannerSection>
      <GridWrapper>
        <BannerItem href="/products">
          <img src={imgcategory} alt="Men Wear" />
          <BannerContent>
            <Heading>MEN WEAR</Heading>
            <Description>
              Nhập JuneNew Giảm 30k đơn đầu tiên từ 199k
            </Description>
            <Button>KHÁM PHÁ</Button>
          </BannerContent>
        </BannerItem>

        <BannerItem href="/products">
          <img src={imgcategory2} alt="Women Active" />
          <BannerContent>
            <Heading>WOMEN ACTIVE</Heading>
            <Description>Tặng Cốc cho đơn từ 500k | Freeship</Description>
            <Button>KHÁM PHÁ</Button>
          </BannerContent>
        </BannerItem>
      </GridWrapper>
    </BannerSection>
  );
};

export default CategoryShowcase;
