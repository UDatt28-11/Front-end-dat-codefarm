import React from "react";
import styled from "@emotion/styled";
const FaithCollectionSection = styled.section`
  background-color: #fff;
  padding-bottom: 1rem;
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

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const TitleHome = () => (
  <FaithCollectionSection>
    <ContentContainer>
      <Title>Bộ sưu tập June</Title>
      <Description>
        Mùa hè là thời điểm tuyệt vời để bạn tận hưởng không khí ngoài trời và
        thử thách bản thân với những bài tập thể thao năng động. Bộ sưu tập sản
        phẩm thể thao mùa hè của chúng tôi mang đến những thiết kế nhẹ nhàng,
        thoáng khí và co giãn tối đa, giúp bạn luôn thoải mái dù tập luyện dưới
        trời nắng.
      </Description>
    </ContentContainer>
  </FaithCollectionSection>
);

export default TitleHome;
