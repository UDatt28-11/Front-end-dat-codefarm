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

const Header = ({ onMenuClick }) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

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
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://pinterest.com/" target="_blank">
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

            <Logo href="/">
              <img src="../../src/assets/icon.png" width={"110px"} alt="" />
            </Logo>

            <MainMenu>
              <MenuList>
                <MenuItem>
                  <a href="" to={"/"} className="active">
                    Trang Chủ
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#">Danh Mục</a>
                </MenuItem>
                <MenuItem>
                  <a href="#">Cửa Hàng</a>
                </MenuItem>
                <MenuItem>
                  <a href="#">Trang</a>
                </MenuItem>
                <MenuItem>
                  <a href="#">Tin Tức</a>
                </MenuItem>
              </MenuList>
            </MainMenu>

            <RightMenu>
              <a href="/search" title="Tìm kiếm">
                <FaSearch />
              </a>
              <Link to={"/auth/login"} title="Tài khoản">
                <FaUser />
              </Link>
              <a href="/wishlist" title="Yêu thích">
                <FaHeart />
                <span className=""></span>
              </a>
              <a href="/cart" title="Giỏ hàng">
                <FaShoppingBag />
                <span className=""></span>
              </a>
            </RightMenu>
          </HeaderContent>
        </Container>
      </HeaderMain>
    </header>
  );
};

export default Header;
