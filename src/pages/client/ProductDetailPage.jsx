import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../api/productApi";
import Breadcrumb from "../../components/products/Breadcrumb";
import {
  Row,
  Col,
  Typography,
  Button,
  Divider,
  Image,
  Select,
  InputNumber,
  Card,
  message,
} from "antd";

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [stock, setStock] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const res = await getProductDetail(id);
        const data = res.data.data;
        setProduct(data);
        setMainImg(data?.thumbnail || "");
      } catch (error) {
        console.error("Lỗi khi load chi tiết sản phẩm:", error);
        message.error("Không thể tải chi tiết sản phẩm");
      }
    };

    fetchProductDetail();
  }, [id]);

  useEffect(() => {
    if (selectedColor && selectedSize && product?.variants) {
      const found = product.variants.find(
        (v) =>
          v.colorId?.name === selectedColor && v.sizeId?.name === selectedSize
      );
      setSelectedVariant(found || null);
      setStock(found?.stock || 0);
    }
  }, [selectedColor, selectedSize, product]);

  if (!product) return <p>Đang tải dữ liệu sản phẩm...</p>;

  const fullImgUrl = mainImg?.startsWith("http")
    ? mainImg
    : `http://localhost:8888${mainImg}`;

  const convertImgUrl = (url) =>
    url?.startsWith("http") ? url : `http://localhost:8888${url}`;

  const colors = [...new Set(product.variants?.map((v) => v.colorId?.name))];
  const sizes = [...new Set(product.variants?.map((v) => v.sizeId?.name))];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Chi tiết sản phẩm
      </Title>
      <Breadcrumb />

      <Row gutter={[32, 32]} style={{ marginTop: 32 }}>
        <Col xs={24} md={10}>
          <Image
            src={fullImgUrl}
            width="100%"
            style={{ borderRadius: 12 }}
            fallback="https://via.placeholder.com/350"
          />
          <Row gutter={8} style={{ marginTop: 16 }}>
            {product.images?.map((img, idx) => (
              <Col key={idx}>
                <Image
                  src={convertImgUrl(img)}
                  width={60}
                  height={60}
                  style={{ borderRadius: 6, cursor: "pointer" }}
                  onClick={() => setMainImg(img)}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={24} md={14}>
          <Title level={3}>{product.title}</Title>
          <Paragraph type="secondary">
            {product.description || "Không có mô tả."}
          </Paragraph>
          <Title level={5} style={{ color: "#e53935" }}>
            {product.price?.toLocaleString()}.000 VNĐ
          </Title>

          <div style={{ margin: "1rem 0" }}>
            <Text strong>Chọn màu:</Text>
            <Select
              placeholder="Chọn màu"
              style={{ width: "100%", margin: "0.5rem 0" }}
              onChange={setSelectedColor}
              value={selectedColor}
            >
              {colors.map((color) => (
                <Option key={color} value={color}>
                  {color}
                </Option>
              ))}
            </Select>

            <Text strong>Chọn size:</Text>
            <Select
              placeholder="Chọn size"
              style={{ width: "100%", marginBottom: "1rem" }}
              onChange={setSelectedSize}
              value={selectedSize}
            >
              {sizes.map((size) => (
                <Option key={size} value={size}>
                  {size}
                </Option>
              ))}
            </Select>

            <div style={{ marginTop: "1rem" }}>
              <Text strong>Số lượng : </Text>
              <InputNumber
                min={1}
                max={stock || 99}
                value={quantity}
                onChange={setQuantity}
                style={{ width: "60px", marginTop: "0.3rem" }}
                disabled={!selectedVariant || stock <= 0}
              />
            </div>

            {selectedColor && selectedSize && (
              <Text type="danger">Tồn kho: {stock}</Text>
            )}
          </div>

          <Button
            size="large"
            block
            style={{
              margin: "1rem 0",
              backgroundColor: "#222",
              color: "#fff",
              borderColor: "#222",
            }}
            disabled={!selectedVariant || stock <= 0}
            onClick={() => {
              console.log("Thêm vào giỏ:", {
                productId: product._id,
                variantId: selectedVariant._id,
                quantity,
              });
              message.success("Đã thêm vào giỏ hàng");
            }}
          >
            Thêm vào giỏ hàng
          </Button>

          <Button type="default" block>
            Yêu thích ♡
          </Button>

          <Divider />
          <Text type="secondary">
            {product.shippingInformation ||
              "Sản phẩm này không áp dụng khuyến mãi."}
          </Text>
        </Col>
      </Row>

      <Card title="Mô tả chi tiết" style={{ marginTop: 40 }}>
        <Paragraph>
          {product.description || "Không có mô tả chi tiết."}
        </Paragraph>
      </Card>

      <Card title="Bình luận về sản phẩm" style={{ marginTop: 40 }}>
        <Paragraph>
          <strong>Nguyễn Văn Đạt:</strong> Sản phẩm rất đẹp, chất lượng tốt!
        </Paragraph>
        <Paragraph>
          <strong>Trần Thị Quốc:</strong> Giao hàng nhanh, đóng gói cẩn thận.
        </Paragraph>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
