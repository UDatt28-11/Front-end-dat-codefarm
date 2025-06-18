/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// === Styled components như file CSS thô ===
const Header = styled.header`
  background-color: #282c34;
  color: #ffffff;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

const LogoutLink = styled(Link)`
  color: #f87171;
  text-decoration: none;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #f87171;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.25s ease;

  &:hover {
    background-color: #f87171;
    color: #ffffff;
  }
`;

// === Component chính ===
const HeaderAdmin = () => {
  return (
    <Header>
      <Title>Xin chào Admin</Title>
      <LogoutLink to="/">Logout</LogoutLink>
    </Header>
  );
};

export default HeaderAdmin;
