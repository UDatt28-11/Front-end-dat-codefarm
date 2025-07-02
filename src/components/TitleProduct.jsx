import React from "react";
import styled from "@emotion/styled";
const FaithCollectionSection = styled.section`
  background-color: #fff;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

const TitleProduct = () => (
  <FaithCollectionSection>
    <ContentContainer>
      <Title>Sản Phẩm Của Chúng Tôi</Title>
    </ContentContainer>
  </FaithCollectionSection>
);

export default TitleProduct;
