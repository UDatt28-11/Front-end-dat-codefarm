import React from "react";
import styled from "@emotion/styled";

const BreadcrumbNav = styled.nav`
  font-size: 0.875rem;

  ol {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    gap: 0.5rem;
  }
`;

const Breadcrumb = () => {
  return (
    <BreadcrumbNav>
      <ol>
        <li>
          <a href="/">Trang Chủ</a> /
        </li>
        <li>Cửa Hàng</li>
      </ol>
    </BreadcrumbNav>
  );
};

export default Breadcrumb;
