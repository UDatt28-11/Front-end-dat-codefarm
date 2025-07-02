import styled from "@emotion/styled";
import {
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiBox,
  FiClipboard,
  FiSettings,
  FiHome,
  FiEdit,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import React from "react";

// Helper to prevent custom props like $collapsed from reaching the DOM
const shouldForwardProp = (prop) => prop !== "$collapsed";

// Sidebar wrapper
const SidebarWrapper = styled("div", { shouldForwardProp })`
  width: ${(props) => (props.$collapsed ? "80px" : "250px")};
  transition: width 0.3s ease;
  background-color: #1e293b;
  color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

// Toggle button
const ToggleButton = styled("button", { shouldForwardProp })`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 20px;
  align-self: ${(props) => (props.$collapsed ? "center" : "flex-end")};
`;

// Nav list
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 12px;
`;

const StyledLink = styled(NavLink, { shouldForwardProp })`
  display: flex;
  align-items: center;
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 12px;
  border-radius: 6px;
  transition: 0.25s ease;

  svg {
    margin-right: ${(props) => (props.$collapsed ? "0" : "10px")};
    font-size: 18px;
  }

  span {
    display: ${(props) => (props.$collapsed ? "none" : "inline")};
    transition: opacity 0.2s ease;
  }

  &.active {
    background-color: #334155;
    color: #ffffff;
  }

  &:hover {
    background-color: #3b82f6;
    color: #ffffff;
  }
`;

const SidebarAdmin = ({ collapsed, onToggle }) => {
  return (
    <SidebarWrapper $collapsed={collapsed}>
      <ToggleButton $collapsed={collapsed} onClick={onToggle}>
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </ToggleButton>

      <NavList>
        <NavItem>
          <StyledLink to="" $collapsed={collapsed}>
            <FiHome />
            <span>Dashboard</span>
          </StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="users" $collapsed={collapsed}>
            <FiUsers />
            <span>Users</span>
          </StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="categories" $collapsed={collapsed}>
            <FiBox />
            <span>Categories </span>
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="products" $collapsed={collapsed}>
            <FiBox />
            <span>Products </span>
          </StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="orders" $collapsed={collapsed}>
            <FiClipboard />
            <span>Orders</span>
          </StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="blogs" $collapsed={collapsed}>
            <FiEdit />
            <span>Blogs</span>
          </StyledLink>
        </NavItem>

        <NavItem>
          <StyledLink to="settings" $collapsed={collapsed}>
            <FiSettings />
            <span>Settings</span>
          </StyledLink>
        </NavItem>
      </NavList>
    </SidebarWrapper>
  );
};

export default SidebarAdmin;
