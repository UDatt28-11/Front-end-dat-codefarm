import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterAdmin = () => (
  <Footer
    style={{
      background: "#1e293b",
      color: "#cbd5e1",
      textAlign: "center",
      padding: "16px 0",
      fontSize: 15,
      letterSpacing: 0.5,
      fontWeight: 500,
      boxShadow: "0 -2px 8px rgba(0,0,0,0.04)",
    }}
  >
    © {new Date().getFullYear()} June Dashboard. All rights reserved.
  </Footer>
);

export default FooterAdmin;
