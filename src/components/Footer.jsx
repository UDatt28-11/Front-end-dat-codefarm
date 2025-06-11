/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiApplepay,
  SiGooglepay,
} from "react-icons/si";

const FooterWrapper = styled.footer`
  background: #f8f8f8;
  padding: 80px 0 40px;
  font-family: "Jost", sans-serif;
`;

const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 15px;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FooterWidget = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
    color: #000;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  p {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #666;
    font-size: 14px;
    line-height: 1.6;

    svg {
      font-size: 18px;
      color: #000;
      min-width: 20px;
      margin-top: 3px;
    }
  }
`;

const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  li a {
    color: #666;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;

    &:hover {
      color: #000;
      transform: translateX(5px);
    }
  }
`;

const Newsletter = styled.div`
  p {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const SubscribeForm = styled.form`
  position: relative;

  input {
    width: 100%;
    height: 45px;
    padding: 0 15px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s ease;

    &::placeholder {
      color: #999;
    }

    &:focus {
      border-color: #000;
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 5px;
    top: 5px;
    height: 35px;
    padding: 0 20px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #333;
    }
  }
`;

const FooterBottom = styled.div`
  padding-top: 30px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #666;
  font-size: 14px;
`;

const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    font-size: 32px;
    color: #666;
    transition: all 0.3s ease;

    &:hover {
      color: #000;
    }

    &.visa {
      color: #1a1f71;
    }

    &.mastercard {
      color: #eb001b;
    }

    &.paypal {
      color: #003087;
    }

    &.apple-pay {
      color: #000;
    }

    &.google-pay {
      color: #3780f1;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    transition: all 0.3s ease;

    svg {
      font-size: 16px;
    }

    &:hover {
      background: #000;
      color: #fff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterWidget>
            <h3>Liên Hệ</h3>
            <ContactInfo>
              <p>
                <FaMapMarkerAlt />
                Số 12 Đình Thôn Mỹ Đình Hà Nội
              </p>
              <p>
                <FaPhoneAlt />+ 84 33596870
              </p>
              <p>
                <FaEnvelope />
                udat2811@gmail.com
              </p>
              <p>
                <FaClock />
                8:00 - 20:00, Thứ Hai - Chủ Nhật
              </p>
            </ContactInfo>
            <SocialLinks>
              <a href="#" title="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" title="Instagram">
                <FaInstagram />
              </a>
              <a href="#" title="Twitter">
                <FaTwitter />
              </a>
              <a href="#" title="Youtube">
                <FaYoutube />
              </a>
              <a href="#" title="Pinterest">
                <FaPinterestP />
              </a>
            </SocialLinks>
          </FooterWidget>

          <FooterWidget>
            <h3>Thông Tin</h3>
            <FooterMenu>
              <li>
                <a href="#">Về Chúng Tôi</a>
              </li>
              <li>
                <a href="#">Liên Hệ</a>
              </li>
              <li>
                <a href="#">Điều Khoản & Điều Kiện</a>
              </li>
              <li>
                <a href="#">Chính Sách Đổi Trả</a>
              </li>
              <li>
                <a href="#">Chính Sách Vận Chuyển</a>
              </li>
              <li>
                <a href="#">Chính Sách Bảo Mật</a>
              </li>
            </FooterMenu>
          </FooterWidget>

          <FooterWidget>
            <h3>Truy Cập Nhanh</h3>
            <FooterMenu>
              <li>
                <a href="#">Hệ Thống Cửa Hàng</a>
              </li>
              <li>
                <a href="#">Tài Khoản</a>
              </li>
              <li>
                <a href="#">Theo Dõi Đơn Hàng</a>
              </li>
              <li>
                <a href="#">Hướng Dẫn Chọn Size</a>
              </li>
              <li>
                <a href="#">Câu Hỏi Thường Gặp</a>
              </li>
            </FooterMenu>
          </FooterWidget>

          <FooterWidget>
            <h3>Đăng Ký Nhận Tin</h3>
            <Newsletter>
              <p>
                Đăng ký nhận bản tin để nhận ưu đãi 10% cho đơn hàng đầu tiên
              </p>
              <SubscribeForm>
                <input type="email" placeholder="Nhập email của bạn" />
                <button type="submit">Đăng Ký</button>
              </SubscribeForm>
            </Newsletter>
          </FooterWidget>
        </FooterTop>

        <FooterBottom>
          <Copyright>© 2025 June. Đã đăng ký bản quyền.</Copyright>
          <PaymentMethods>
            <SiVisa className="visa" title="Visa" />
            <SiMastercard className="mastercard" title="Mastercard" />
            <SiPaypal className="paypal" title="PayPal" />
            <SiApplepay className="apple-pay" title="Apple Pay" />
            <SiGooglepay className="google-pay" title="Google Pay" />
          </PaymentMethods>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
