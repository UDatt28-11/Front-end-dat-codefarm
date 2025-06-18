import React, { useState } from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import FooterAdmin from "../components/FooterAdmin";
import SidebarAdmin from "../components/SideBarAdmin";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Content = styled.main`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #f9fafb;
`;
const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LayoutWrapper>
      <HeaderAdmin />
      <Body>
        <SidebarAdmin
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
        <Content>
          <Outlet />
        </Content>
      </Body>
      <FooterAdmin />
    </LayoutWrapper>
  );
};

export default AdminLayout;
