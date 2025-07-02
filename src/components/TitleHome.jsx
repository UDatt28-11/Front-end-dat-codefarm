import React from "react";
import styled from "@emotion/styled";

const WhatNewSection = styled.section`
  padding-top: 2.5rem;

  @media (min-width: 768px) {
    padding-top: 5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeadingTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const MenuTab = styled.div`
  background-color: #f8f8f8;
  border-radius: 1rem;
  margin-top: 1.5rem;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
  position: relative;
`;

const Indicator = styled.div`
  position: absolute;
  top: 0.25rem;
  bottom: 0.25rem;
  width: 100px;
  background: white;
  border-radius: 9999px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
`;

const TabItem = styled.div`
  position: relative;
  color: #999;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s;

  &.active,
  &:hover {
    color: #000;
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TitleHome = () => {
  return (
    <WhatNewSection>
      <Container>
        <Heading>
          <HeadingTitle>What's new</HeadingTitle>
          <MenuTab>
            <Menu>
              <Indicator />
              <TabItem data-item="top">top</TabItem>
              <TabItem className="active" data-item="t-shirt">
                t-shirt
              </TabItem>
              <TabItem data-item="dress">dress</TabItem>
              <TabItem data-item="sets">sets</TabItem>
              <TabItem data-item="shirt">shirt</TabItem>
            </Menu>
          </MenuTab>
        </Heading>

        <ProductList>{/* TODO: Render list sản phẩm ở đây */}</ProductList>
      </Container>
    </WhatNewSection>
  );
};

export default TitleHome;
