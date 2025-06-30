import React from "react";
import styled from "@emotion/styled";
import { FiPhoneCall } from "react-icons/fi";
import { BiRefresh } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

// Styled components
const BenefitWrapper = styled.section`
  padding: 70px 0;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
`;

const Item = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 16px;
  color: #000;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #111;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #666;
`;

const Benefit = () => {
  return (
    <BenefitWrapper>
      <Container>
        <Grid>
          <Item>
            <IconWrapper>
              <FiPhoneCall />
            </IconWrapper>
            <Title>Dịch Vụ Khách Hàng 24/7</Title>
            <Description>
              Chúng tôi ở đây để giúp bạn giải đáp bất kỳ câu hỏi hoặc thắc mắc
              nào mà bạn có, 24/7.
            </Description>
          </Item>

          <Item>
            <IconWrapper>
              <BiRefresh />
            </IconWrapper>
            <Title>Hoàn Tiền Trong 14 Ngày</Title>
            <Description>
              Nếu bạn không hài lòng với giao dịch mua của mình, chỉ cần trả lại
              trong vòng 14 ngày để được hoàn lại tiền.
            </Description>
          </Item>

          <Item>
            <IconWrapper>
              <BsShieldCheck />
            </IconWrapper>
            <Title>Đảm Bảo Của Chúng Tôi</Title>
            <Description>
              Chúng tôi đứng đằng sau các sản phẩm và dịch vụ của mình và đảm
              bảo sự hài lòng của bạn.
            </Description>
          </Item>

          <Item>
            <IconWrapper>
              <FaShippingFast />
            </IconWrapper>
            <Title>Vận Chuyển Trên Toàn Thế Giới</Title>
            <Description>
              Chúng tôi vận chuyển sản phẩm của mình trên toàn thế giới, giúp
              khách hàng có thể tiếp cận được ở mọi nơi.
            </Description>
          </Item>
        </Grid>
      </Container>
    </BenefitWrapper>
  );
};

export default Benefit;
