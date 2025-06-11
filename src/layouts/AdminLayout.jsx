import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../components/HeaderAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import FooterAdmin from "../components/FooterAdmin";
import styled from "@emotion/styled";

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
