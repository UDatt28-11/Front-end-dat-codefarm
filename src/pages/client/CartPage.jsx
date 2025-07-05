import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const Notification = styled.div`
  background: #d6f5c9;
  border-radius: 12px;
  padding: 14px 20px;
  margin-bottom: 24px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const FreeShipBar = styled.div`
  background: #f0f0f0;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 24px;

  span {
    font-size: 15px;
  }
`;

const ProgressBar = styled.div`
  height: 10px;
  background: #e0e0e0;
  border-radius: 999px;
  margin-top: 8px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: 50%;
  height: 100%;
  background: #1a7f37;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
  min-width: 0;
`;

const Right = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 22px;

  .header,
  .row {
    display: grid;
    grid-template-columns: 150px 1fr 100px 100px 100px;
    padding: 12px 12px;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: left;
      row-gap: 8px;
    }
  }

  .header {
    background: #f5f5f5;
    font-weight: 700;
    font-size: 15px;
  }

  .row {
    font-size: 14px;
    border-top: 1px solid #eee;
  }

  img {
    width: 220px;
    object-fit: cover;
    border-radius: 8px;
    margin: 0 auto;
    margin-left: 50px;
  }
`;

const VoucherForm = styled.form`
  position: relative;
  margin-bottom: 20px;
  input {
    width: 100%;
    padding: 10px 120px 10px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 15px;
  }
  button {
    position: absolute;
    right: 4px;
    top: 4px;
    bottom: 4px;
    padding: 0 20px;
    background: #111;
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
`;

const VoucherList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const VoucherCard = styled.div`
  flex: 1 1 240px;
  background: white;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;

  .top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 6px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    padding-top: 6px;
    font-weight: 600;
  }
`;

const OrderSummaryBox = styled.div`
  background: #f9f9f9;
  border-radius: 16px;
  padding: 28px 24px 24px 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  min-width: 300px;
  max-width: 400px;
  margin: 0 auto;
`;
const OrderTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 28px;
  text-align: left;
`;
const OrderLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 18px;
`;
const OrderDivider = styled.div`
  border-bottom: 1.5px solid #ececec;
  margin: 18px 0 18px 0;
`;
const ShippingBlock = styled.div`
  margin-bottom: 18px;
`;
const ShippingLabel = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const ShippingOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ShippingOption = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 0;
  cursor: pointer;
  input[type="radio"] {
    accent-color: #1a7f37;
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
  span {
    min-width: 80px;
    text-align: right;
    font-weight: 500;
  }
`;
const TotalLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin: 24px 0 18px 0;
`;
const CheckoutBtn = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  padding: 16px 0;
  font-size: 18px;
  font-weight: 700;
  border-radius: 16px;
  background: #111;
  color: #fff;
  border: none;
  margin: 18px 0 10px 0;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: rgb(207, 202, 202);
    color: #222;
  }
`;
const ContinueBtn = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: #111;
  background: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
const QuantityBox = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 4px 8px;
  background: #f9f9f9;
  width: fit-content;

  input[type="number"] {
    width: 48px;
    border: none;
    background: transparent;
    text-align: center;
    font-size: 15px;
    outline: none;
  }
`;
const CartPage = () => {
  return (
    <Container>
      <div className="text-center mb-5">
        <h2 className="fw-bold">Giỏ Hàng</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <a href="/">Trang Chủ</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Giỏ Hàng
            </li>
          </ol>
        </nav>
      </div>
      <Notification>
        <span role="img" aria-label="fire">
          🔥
        </span>
        Giỏ hàng sẽ hết hạn trong <b style={{ color: "#ff3c00" }}>10:00</b> phút
      </Notification>
      <FreeShipBar>
        Mua thêm <b>$250.00</b> để được{" "}
        <span style={{ color: "#1a7f37", fontWeight: 700 }}>
          miễn phí vận chuyển
        </span>
        <ProgressBar>
          <Progress />
        </ProgressBar>
      </FreeShipBar>
      <FlexWrap>
        <Left>
          <ProductCard>
            <div className="header">
              <div></div>
              <div>Sản phẩm</div>
              <div>Đơn giá</div>
              <div>Số lượng</div>
              <div>Thành tiền</div>
            </div>
            <div className="row">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/580e49a0-a858-4673-9f2f-30fb04b00df3/AIR+MAX+DN8.png"
                alt="Product"
              />
              <div style={{ textAlign: "center" }}>Nike Air Max Dn8</div>
              <div>$450.00</div>
              <QuantityBox>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="10"
                  step="1"
                />
              </QuantityBox>

              <div style={{ color: "#1a7f37", fontWeight: 600 }}>$450.00</div>
            </div>
          </ProductCard>
          <VoucherForm>
            <input type="text" placeholder="Nhập mã giảm giá" required />
            <button type="submit">Áp dụng</button>
          </VoucherForm>
          <VoucherList>
            {[10, 15, 20].map((percent, index) => (
              <VoucherCard key={index}>
                <div className="top">
                  <div>Giảm {percent}%</div>
                  <div>Cho đơn từ ${200 + index * 100}</div>
                </div>
                <div className="bottom">
                  <div>MÃ: AN6810</div>
                  <button
                    style={{
                      background: "#111",
                      color: "#fff",
                      borderRadius: 6,
                      padding: "6px 12px",
                      border: "none",
                    }}
                  >
                    Dùng mã
                  </button>
                </div>
              </VoucherCard>
            ))}
          </VoucherList>
        </Left>
        <Right>
          <OrderSummaryBox>
            <OrderTitle>Tóm tắt đơn hàng</OrderTitle>
            <OrderLine>
              <span>Tạm tính</span>
              <span>$450.00</span>
            </OrderLine>
            <OrderLine>
              <span>Giảm giá</span>
              <span>-$0.00</span>
            </OrderLine>
            <OrderDivider />
            <ShippingBlock>
              <ShippingLabel>Vận chuyển</ShippingLabel>
              <ShippingOptions>
                <ShippingOption>
                  <span>
                    <input type="radio" name="ship" defaultChecked /> Miễn phí
                  </span>
                  <span>$0.00</span>
                </ShippingOption>
                <ShippingOption>
                  <span>
                    <input type="radio" name="ship" /> Nội thành
                  </span>
                  <span>$30.00</span>
                </ShippingOption>
                <ShippingOption>
                  <span>
                    <input type="radio" name="ship" /> Chuyển phát nhanh
                  </span>
                  <span>$40.00</span>
                </ShippingOption>
              </ShippingOptions>
            </ShippingBlock>
            <OrderDivider />
            <TotalLine>
              <span>Tổng cộng</span>
              <span>$450.00</span>
            </TotalLine>
            <CheckoutBtn to="/checkout">Tiến hành thanh toán</CheckoutBtn>
            <ContinueBtn to="/products">Tiếp tục mua hàng</ContinueBtn>
          </OrderSummaryBox>
        </Right>
      </FlexWrap>
    </Container>
  );
};

export default CartPage;
