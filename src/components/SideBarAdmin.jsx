import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  SettingOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SidebarAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      key: "dashboard",
      icon: <HomeOutlined />,
      label: (
        <Link to="/admin" style={{ textDecoration: "none", color: "inherit" }}>
          Dashboard
        </Link>
      ),
    },
    {
      key: "users",
      icon: <TeamOutlined />,
      label: (
        <Link
          to="/admin/users"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Users
        </Link>
      ),
    },
    {
      key: "categories",
      icon: <AppstoreOutlined />,
      label: "Categories",
      children: [
        {
          key: "category-list",
          icon: <UnorderedListOutlined />,
          label: (
            <Link
              to="/admin/categories"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Category List
            </Link>
          ),
        },
        {
          key: "category-add",
          icon: <PlusCircleOutlined />,
          label: (
            <Link
              to="/admin/categories/add"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Add Category
            </Link>
          ),
        },
      ],
    },
    {
      key: "products",
      icon: <ShoppingOutlined />,
      label: "Products",
      children: [
        {
          key: "products-list",
          icon: <UnorderedListOutlined />,
          label: (
            <Link
              to="/admin/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Products List
            </Link>
          ),
        },
        {
          key: "products-add",
          icon: <PlusCircleOutlined />,
          label: (
            <Link
              to="/admin/products/add"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Add Products
            </Link>
          ),
        },
      ],
    },
    {
      key: "orders",
      icon: <ShoppingCartOutlined />,
      label: (
        <Link
          to="/admin/orders"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Orders
        </Link>
      ),
    },
    {
      key: "brands",
      icon: <ShoppingCartOutlined />,
      label: (
        <Link
          to="/admin/brands"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Brands
        </Link>
      ),
    },
    {
      key: "blogs",
      icon: <FileTextOutlined />,
      label: (
        <Link
          to="/admin/blogs"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Blogs
        </Link>
      ),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: (
        <Link
          to="/admin/settings"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Settings
        </Link>
      ),
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      width={240}
      style={{
        minHeight: "100vh",
        paddingTop: 0,
        paddingBottom: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={["categories"]}
        defaultSelectedKeys={["dashboard"]}
        items={menuItems}
        style={{
          fontSize: 16,
          fontWeight: 500,
          border: "none",
          padding: "18px 0",
        }}
      />
      <style>{`
        .ant-menu-dark,
        .ant-menu-dark .ant-menu,
        .ant-menu-dark .ant-menu-submenu,
        .ant-menu-dark .ant-menu-submenu-title,
        .ant-menu-dark .ant-menu-item {
          
        }
        .ant-menu-dark .ant-menu-item-selected {
          color: #fff !important;
          font-weight: 700;
          
        }
        .ant-menu-dark .ant-menu-item,
        .ant-menu-dark .ant-menu-submenu-title {
          margin: 6px 0;
          
        }
        .ant-menu-dark .ant-menu-item:hover,
        .ant-menu-dark .ant-menu-submenu-title:hover {
          background: #1e293b !important;
          color: #fff !important;
          
        }
        .ant-layout-sider,
        .ant-layout-sider-children {
          background: #181f2a !important;
        }
        .ant-layout-sider-trigger {
          background: #1e293b !important;
          color: #fff !important;
          border-radius: 0 !important;
          font-size: 22px !important;
          transition: background 0.2s;
        }
      
      `}</style>
    </Sider>
  );
};

export default SidebarAdmin;
