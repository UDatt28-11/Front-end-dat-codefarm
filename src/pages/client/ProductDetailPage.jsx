import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { getProductDetail } from "../../api/productApi";
import Breadcrumb from "../../components/products/Breadcrumb";

// Styled components giữ nguyên...
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const TitleBlock = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h2`
  font-weight: bold;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const MainImageWrapper = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  min-height: 420px;
  background: #f8f8f8;
  border-radius: 16px;
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 420px;
  border-radius: 12px;
  object-fit: contain;
`;

const InfoColumn = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 320px;
`;

const ProductName = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductDesc = styled.p`
  color: #555;
  line-height: 1.6;
`;

const ProductPrice = styled.div`
  font-size: 1.5rem;
  color: #e53935;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const AddToBagBtn = styled.button`
  padding: 1.1rem 0;
  border: none;
  border-radius: 32px;
  font-size: 1.2rem;
  font-weight: 600;
  background: #111;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: background 0.2s;
  &:hover {
    background: #1976d2;
  }
`;

const FavouriteBtn = styled.button`
  padding: 1rem 0;
  border: 2px solid #eee;
  border-radius: 32px;
  font-size: 1.1rem;
  font-weight: 500;
  background: #fff;
  color: #111;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: border 0.2s;
  &:hover {
    border: 2px solid #1976d2;
    color: #1976d2;
  }
`;

const Notice = styled.div`
  margin-top: 1.2rem;
  color: #888;
  font-size: 1rem;
`;

const Section = styled.div`
  margin-top: 2rem;
  background: #fafafa;
  border-radius: 8px;
  padding: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CommentSection = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  margin-top: 2rem;
`;

const CommentTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CommentForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CommentInput = styled.textarea`
  flex: 1;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0.75rem;
  font-size: 1rem;
  resize: none;
`;

const CommentButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  background: #1976d2;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #125ea2;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CommentItem = styled.div`
  background: #f8f8f8;
  border-radius: 6px;
  padding: 1rem;
`;

const CommentAuthor = styled.div`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const CommentText = styled.div`
  color: #444;
`;

const GalleryImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid #eee;
  cursor: pointer;
  transition: border 0.2s;
  &:hover {
    border: 2px solid #1976d2;
  }
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const res = await getProductDetail(id);
        console.log("Dữ liệu sản phẩm:", res.data); // ← Thêm dòng này
        setProduct(res.data.data);
        setMainImg(res.data.data.thumbnail || "");
      } catch (error) {
        console.error("Lỗi khi load chi tiết sản phẩm:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (!product) return <p>Đang tải dữ liệu sản phẩm...</p>;
  const fullImgUrl = mainImg?.startsWith("http")
    ? mainImg
    : `http://localhost:8888${mainImg}`;

  return (
    <Container>
      <TitleBlock>
        <PageTitle>Chi tiết sản phẩm</PageTitle>
        <Breadcrumb />
      </TitleBlock>

      <MainLayout>
        <GalleryColumn>
          {/* Nếu sau này bạn có nhiều ảnh thì hiển thị ở đây */}
          {product.images?.map((img, idx) => (
            <GalleryImage
              key={idx}
              src={img}
              alt={`Ảnh ${idx + 1}`}
              onClick={() => setMainImg(img)}
            />
          ))}
        </GalleryColumn>

        <MainImageWrapper>
          <MainImage src={fullImgUrl} alt={product?.title || "Ảnh sản phẩm"} />
        </MainImageWrapper>

        <InfoColumn>
          <ProductName>{product?.title}</ProductName>
          <ProductDesc>{product?.description || "Không có mô tả."}</ProductDesc>
          <ProductPrice>{product?.price?.toLocaleString()}₫</ProductPrice>
          <ActionButtons>
            <AddToBagBtn>Thêm vào giỏ hàng</AddToBagBtn>
            <FavouriteBtn>Yêu thích ♡</FavouriteBtn>
          </ActionButtons>
          <Notice>
            {product?.shippingInformation ||
              "Sản phẩm này không áp dụng khuyến mãi."}
          </Notice>
        </InfoColumn>
      </MainLayout>

      <Section>
        <SectionTitle>Mô tả chi tiết</SectionTitle>
        <p>{product?.description || "Không có mô tả chi tiết."}</p>
      </Section>

      <CommentSection>
        <CommentTitle>Bình luận về sản phẩm</CommentTitle>
        <CommentForm>
          <CommentInput rows={2} placeholder="Nhập bình luận của bạn..." />
          <CommentButton>Gửi</CommentButton>
        </CommentForm>
        <CommentList>
          <CommentItem>
            <CommentAuthor>Nguyễn Văn A</CommentAuthor>
            <CommentText>Sản phẩm rất đẹp, chất lượng tốt!</CommentText>
          </CommentItem>
          <CommentItem>
            <CommentAuthor>Trần Thị B</CommentAuthor>
            <CommentText>Giao hàng nhanh, đóng gói cẩn thận.</CommentText>
          </CommentItem>
        </CommentList>
      </CommentSection>
    </Container>
  );
};

export default ProductDetailPage;
