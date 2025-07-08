import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background: #fafbfc;
  min-height: 100vh;
  padding: 40px 0;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
const MainFlex = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 32px;
  }
`;
const Left = styled.div`
  flex: 1 1 55%;
  min-width: 0;
`;
const Right = styled.div`
  flex: 1 1 40%;
  min-width: 320px;
  max-width: 400px;
`;
const LoginBlock = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-bottom: 18px;
  .left {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      color: #888;
    }
    .login-link {
      color: #111;
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
      margin-left: 4px;
    }
  }
  .right {
    color: #888;
    font-size: 20px;
    cursor: pointer;
  }
`;
const FormBlock = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ececec;
  padding: 32px 28px;
  margin-top: 16px;
`;
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 15px;
  background: #fafbfc;
  &:focus {
    border: 1.5px solid #1a7f37;
    outline: none;
  }
`;
const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 15px;
  background: #fafbfc;
  &:focus {
    border: 1.5px solid #1a7f37;
    outline: none;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  font-size: 15px;
  background: #fafbfc;
  min-height: 60px;
  resize: vertical;
  &:focus {
    border: 1.5px solid #1a7f37;
    outline: none;
  }
`;
const SectionTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  margin: 32px 0 18px 0;
`;
const PaymentBlock = styled.div`
  margin-top: 32px;
`;
const PaymentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 18px;
`;
const PaymentType = styled.label`
  background: #f7f7f7;
  border: 1px solid #ececec;
  border-radius: 10px;
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  input[type="radio"] {
    accent-color: #1a7f37;
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;
const PayBtn = styled.button`
  width: 100%;
  background: #222;
  color: #fff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 0;
  border: none;
  margin-top: 32px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #111;
  }
`;
const OrderSummaryBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 28px 24px 24px 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  min-width: 300px;
  max-width: 400px;
  margin: 0 auto;
`;
const OrderTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 18px;
`;
const OrderLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 18px;
`;
const OrderDivider = styled.div`
  border-bottom: 1.5px solid #ececec;
  margin: 18px 0 18px 0;
`;
const TotalLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  margin: 24px 0 18px 0;
`;

const CheckoutPage = () => {
  return (
    <Wrapper>
      <div className="text-center mb-5">
        <h2 className="fw-bold">Thanh Toán</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <a href="/" style={{ textDecoration: "none", color: "#222" }}>
                Trang Chủ
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Thanh Toán
            </li>
          </ol>
        </nav>
      </div>
      <Container>
        <MainFlex>
          <Left>
            <LoginBlock>
              <div className="left">
                <span>Bạn đã có tài khoản?</span>
                <span className="login-link">Đăng nhập</span>
              </div>
              <div className="right">
                <i className="ph ph-caret-down fs-20"></i>
              </div>
            </LoginBlock>
            <FormBlock>
              <SectionTitle>Thông tin giao hàng</SectionTitle>
              <FormGrid>
                <Input type="text" placeholder="Họ *" required />
                <Input type="text" placeholder="Tên *" required />
                <Input type="email" placeholder="Email *" required />
                <Input type="number" placeholder="Số điện thoại *" required />
                <Select>
                  <option>Chọn Quốc Gia/Khu Vực</option>
                  <option>Việt Nam</option>
                  <option>Pháp</option>
                  <option>Singapore</option>
                </Select>
                <Input
                  type="text"
                  placeholder="Thành phố / Thị xã *"
                  required
                />
                <Input
                  type="text"
                  placeholder="Địa chỉ (số nhà, đường...)"
                  required
                />
                <Select>
                  <option>Chọn Tỉnh/Thành phố</option>
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                </Select>
                <Input type="text" placeholder="Mã bưu điện *" required />
                <Textarea placeholder="Ghi chú cho đơn hàng..." />
              </FormGrid>
              <PaymentBlock>
                <SectionTitle>Chọn phương thức thanh toán:</SectionTitle>
                <PaymentList>
                  <PaymentType>
                    <input type="radio" name="payment" /> Thẻ tín dụng/Ghi nợ
                  </PaymentType>
                  <PaymentType>
                    <input type="radio" name="payment" /> Thanh toán khi nhận
                    hàng
                  </PaymentType>
                  <PaymentType>
                    <input type="radio" name="payment" /> Apple Pay
                  </PaymentType>
                  <PaymentType>
                    <input type="radio" name="payment" /> PayPal
                  </PaymentType>
                </PaymentList>
                <PayBtn>THANH TOÁN</PayBtn>
              </PaymentBlock>
            </FormBlock>
          </Left>
          <Right>
            <OrderSummaryBox>
              <OrderTitle>Đơn hàng của bạn</OrderTitle>
              <OrderLine>
                <span>Giảm giá</span>
                <span>-0₫</span>
              </OrderLine>
              <OrderDivider />
              <OrderLine>
                <span>Phí vận chuyển</span>
                <span>Miễn phí</span>
              </OrderLine>
              <OrderDivider />
              <TotalLine>
                <span>Tổng cộng</span>
                <span>0₫</span>
              </TotalLine>
            </OrderSummaryBox>
          </Right>
        </MainFlex>
      </Container>
    </Wrapper>
  );
};

export default CheckoutPage;
