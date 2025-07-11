import React from "react";
import styled from "@emotion/styled";
import { FaHeart, FaRedo } from "react-icons/fa";

const Card = styled.div`
  transition: transform 0.2s;
  margin-top: 20px; /* 👈 Thêm dòng này */
  border: none;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border: none;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 0.75rem;
  border: none;
`;

// const Badge = styled.span`
//   position: absolute;
//   top: 0.5rem;
//   left: 0.5rem;
//   background-color: ${(props) => (props.sale ? "red" : "green")};
//   color: white;
//   padding: 0.25rem 0.75rem;
//   font-size: 0.75rem;
//   border-radius: 9999px;
// `;

const ActionButtons = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const CardBody = styled.div`
  text-align: center;
`;

const ProductName = styled.h6`
  margin-bottom: 0.5rem;
`;

const PriceBlock = styled.div`
  margin-bottom: 0.5rem;
  span {
    margin-left: 0.5rem;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 0.25rem 1rem;
  margin: 8px;
  border-radius: 9999px;
  font-size: 0.875rem;
  border: 1px solid;
  background: transparent;
  cursor: pointer;

  ${(props) =>
    props.primary
      ? `border-color: #0d6efd; color: #0d6efd;`
      : `border-color: #333; color: #333;`}
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ImageWrapper>
        {/* <Badge sale={product.sale}>{product.sale ? "SALE" : "NEW"}</Badge> */}
        <ActionButtons>
          <IconButton>
            <FaHeart />
          </IconButton>
          <IconButton>
            <FaRedo />
          </IconButton>
        </ActionButtons>
        <ProductImage src={product.thumbnail} alt={product.title} />
      </ImageWrapper>
      <CardBody>
        <ProductName>{product.title}</ProductName>
        <PriceBlock>
          <strong>${product.price?.toFixed(3)}</strong>
          {product.oldPrice && (
            <span style={{ textDecoration: "line-through", color: "#888" }}>
              ${product.oldPrice.toFixed(3)}
            </span>
          )}
          {product.discount && (
            <span style={{ color: "green" }}>-{product.discount}%</span>
          )}
        </PriceBlock>
        <ActionGroup>
          <ActionButton>Quick View</ActionButton>
          <ActionButton primary>Quick Shop</ActionButton>
        </ActionGroup>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
