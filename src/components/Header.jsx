/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBars,
} from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

const TopNav = styled.div`
  background: #000000;
  height: 44px;
  font-family: "Jost", sans-serif;
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 15px;
  height: 100%;
`;

const TopNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
  cursor: pointer;
  padding: 5px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Selected = styled.p`
  color: white;
  margin-top: 15px;
  font-size: 13px;
  font-weight: 500;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 120px;
  border-radius: 4px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1000;
  margin-top: 5px;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f8f8;
    color: #000;
  }

  &.active {
    color: #000;
    font-weight: 500;
    background: #f8f8f8;
  }
`;

const HeaderMain = styled.div`
  height: 80px;
  background: white;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  position: relative;
  z-index: 99;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 40px;
`;

const Logo = styled.a`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  font-family: "Jost", sans-serif;
  letter-spacing: -0.5px;
`;

const MainMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  gap: 40px;
`;

const MenuItem = styled.li`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;

  &:hover {
    .mega-menu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }

  a {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 4px;
    letter-spacing: 0.5px;

    &:hover {
      color: #666;
    }

    &.active {
      color: #000;
    }

    i {
      font-size: 16px;
      margin-left: 4px;
    }
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  a {
    color: #000;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;

    svg {
      font-size: 20px;
    }

    &:hover {
      color: #666;
    }

    span.count {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #000;
      color: #fff;
      font-size: 11px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
    }
  }
`;

const MobileMenuIcon = styled.button`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #000;
    padding: 5px;

    svg {
      font-size: 24px;
    }
  }
`;

const Announcement = styled.div`
  text-align: center;
  color: white;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.3px;

  span {
    color: #ffd700;
    font-weight: 600;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    color: white;
    font-size: 16px;
    transition: all 0.3s ease;

    &:hover {
      color: #ffd700;
    }
  }
`;
const ButtonBlack = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 12px 28px;
  font-weight: 600;
  border-radius: 12px;
  margin-bottom: 12px;
  text-decoration: none;
  transition: background 0.3s;
  cursor: pointer;
  border: 1px solid #222;

  &:hover {
    background: #222;
    border: 1px solid #ddd;
  }
`;

const RegisterLink = styled(Link)`
  color: #000;
  font-weight: 600;
  text-align: center;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 28px;
  border: 1px solid #222;
  transition: background 0.3s;

  &:hover {
    color: #fff;
    background: #222;
  }
`;

const HoverBridge = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  height: 15px;
  width: 220px;
  z-index: 5;
`;

const LoginPopup = styled.div`
  position: absolute;
  top: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%);

  width: 220px;
  padding: 12px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 10;
`;

const Header = ({ onMenuClick }) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  // const handleUserClick = () => {
  //   setIsLoginPopupOpen(!isLoginPopupOpen);
  // };

  return (
    <header>
      <TopNav>
        <Container>
          <TopNavContent>
            <LeftContent>
              <SelectWrapper onClick={() => setIsLanguageOpen(!isLanguageOpen)}>
                <Selected>Tiếng Việt</Selected>
                <HiChevronDown />
                <DropdownList isOpen={isLanguageOpen}>
                  <DropdownItem>English</DropdownItem>
                  <DropdownItem className="active">Tiếng Việt</DropdownItem>
                </DropdownList>
              </SelectWrapper>
              <SelectWrapper onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}>
                <Selected>VND</Selected>
                <HiChevronDown />
                <DropdownList isOpen={isCurrencyOpen}>
                  <DropdownItem>USD</DropdownItem>
                  <DropdownItem className="active">VND</DropdownItem>
                </DropdownList>
              </SelectWrapper>
            </LeftContent>
            <Announcement>
              Khách hàng mới giảm <span>10%</span> với mã <span>GET10</span>
            </Announcement>
            <SocialLinks>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://pinterest.com/" target="_blank" rel="noreferrer">
                <FaPinterestP />
              </a>
            </SocialLinks>
          </TopNavContent>
        </Container>
      </TopNav>

      <HeaderMain>
        <Container>
          <HeaderContent>
            <MobileMenuIcon onClick={onMenuClick}>
              <FaBars />
            </MobileMenuIcon>

            <Link to="/">
              <img src="../../src/assets/icon.png" width={"110px"} alt="" />
            </Link>

            <MainMenu>
              <MenuList>
                <MenuItem>
                  <Link to="/" className="active">
                    Trang Chủ
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/products">Cửa Hàng</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/about">Giới Thiệu</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/blogs">Tin Tức</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/contact">Liên Hệ</Link>
                </MenuItem>
              </MenuList>
            </MainMenu>

            <RightMenu>
              <Link to="/search" title="Tìm kiếm">
                <FaSearch />
              </Link>

              <div
                onMouseEnter={() => setIsLoginPopupOpen(true)}
                onMouseLeave={() => setIsLoginPopupOpen(false)}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <FaUser style={{ fontSize: 20 }} />

                {/* Phần tử bắc cầu hover */}
                <HoverBridge />

                {/* Popup đăng nhập */}
                <LoginPopup isOpen={isLoginPopupOpen}>
                  <ButtonBlack to="/api/auth/login">ĐĂNG NHẬP</ButtonBlack>
                  <RegisterLink to="/api/auth/register">ĐĂNG KÝ</RegisterLink>
                </LoginPopup>
              </div>

              <Link to="/profile/wishlist" title="Yêu thích">
                <FaHeart />
                <span className=""></span>
              </Link>
              <Link to="/cart" title="Giỏ hàng">
                <FaShoppingBag />
                <span className=""></span>
              </Link>
            </RightMenu>
          </HeaderContent>
        </Container>
      </HeaderMain>
    </header>
  );
};

export default Header;
