import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 40px 0;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
  margin: 0 30px;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: ${(props) =>
      props.direction === "prev" ? "rotate(-135deg)" : "rotate(45deg)"};
  }

  ${(props) => (props.direction === "prev" ? "left: 0;" : "right: 0;")}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
`;

const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0 35px;
  height: 55px;
  background: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    background: #333;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  color: #000;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 60px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 20px;
    transition: opacity 0.5s ease-in-out;
    &.active {
      transform: translateX(0);
    }
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 40px;
    color: #666;
    transition: opacity 0.5s ease-in-out;
    &.active {
      transform: translateX(0);
    }
  }
  a {
    transition: opacity 0.5s ease-in-out;
    &.active {
      transform: translateX(0);
    }
  }
`;

const bannerImages = [
  "/src/assets/images/banner/slider1.png",
  "/src/assets/images/banner/slider6.png",
  "/src/assets/images/banner/slider3.png",
];

const heroContent = [
  {
    title: "Bộ Sưu Tập Mới 2025",
    description:
      "Khám phá bộ sưu tập sản phẩm thể thao mới nhất của chúng tôi. Hãy tìm phong cách hoàn hảo phù hợp với bạn.",
    buttonText: "Mua Ngay",
    buttonLink: "/shop",
  },
  {
    title: "Bộ Sưu Tập Thời Trang",
    description:
      "Cập nhật tủ đồ của bạn với những thiết kế thể thao thời thượng nhất. Từ casual đến formal, chúng tôi có tất cả những gì bạn cần.",
    buttonText: "Mua Sắm",
    buttonLink: "/trendy",
  },
  {
    title: "Bộ Sưu Tập Giới Hạn",
    description:
      "Đừng bỏ lỡ cơ hội sở hữu những thiết kế độc đáo từ bộ sưu tập giới hạn của chúng tôi. Số lượng có hạn!",
    buttonText: "Xem Ngay",
    buttonLink: "/limited-edition",
  },
];

const HeroContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const HeroSlideWrapper = styled.div`
  flex: 1;
  height: 600px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    height: 400px;
  }
`;

const HeroSlide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const SlideControls = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 2;
`;

const SlideButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #000;
  background: ${(props) => (props.active ? "#000" : "transparent")};
  cursor: pointer;
  padding: 0;

  &:hover {
    background: #000;
  }
`;

const CategorySection = styled.section`
  padding: 100px 0;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    font-size: 16px;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.a`
  position: relative;
  display: block;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.05);
    }

    .content {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: all 0.5s ease;
  }

  .content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    transition: all 0.3s ease;

    h3 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
`;

const ProductSection = styled.section`
  padding: 100px 0;
  background: #f8f8f8;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background: #fff;

  .image {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: all 0.5s ease;
    }

    .actions {
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      transform: translateX(60px);
      transition: all 0.3s ease;

      button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: all 0.3s ease;

        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }

    &:hover {
      img {
        transform: scale(1.05);
      }

      .actions {
        transform: translateX(0);
      }
    }
  }

  .info {
    padding: 20px;
    text-align: center;

    h3 {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;

      a {
        color: #000;
        text-decoration: none;

        &:hover {
          color: #666;
        }
      }
    }

    .price {
      color: #000;
      font-weight: 500;

      .old {
        color: #666;
        text-decoration: line-through;
        margin-right: 10px;
      }
    }
  }
`;

const HomePage = () => {
  const [slide, setSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextClick();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideClick = (index) => {
    if (!isAnimating && index !== slide) {
      setIsAnimating(true);
      setSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlide(
        (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSlide((prev) => (prev + 1) % bannerImages.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <main>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <h2 className={!isAnimating ? "active" : ""}>
              {heroContent[slide].title}
            </h2>
            <p className={!isAnimating ? "active" : ""}>
              {heroContent[slide].description}
            </p>
            <Button
              href={heroContent[slide].buttonLink}
              className={!isAnimating ? "active" : ""}
            >
              {heroContent[slide].buttonText}
            </Button>
          </HeroContent>

          <HeroSlideWrapper>
            {bannerImages.map((image, index) => (
              <HeroSlide key={index} bg={image} active={index === slide} />
            ))}
          </HeroSlideWrapper>

          <SlideControls>
            {bannerImages.map((_, index) => (
              <SlideButton
                key={index}
                active={index === slide}
                onClick={() => handleSlideClick(index)}
              />
            ))}
          </SlideControls>
        </HeroContainer>
      </HeroSection>
      <NavigationButton direction="prev" onClick={handlePrevClick} />
      <NavigationButton direction="next" onClick={handleNextClick} />

      <CategorySection>
        <Container>
          <SectionTitle>
            <h2>Mua Theo Danh Mục</h2>
            <p>Tìm sản phẩm yêu thích của bạn theo danh mục</p>
          </SectionTitle>

          <CategoryGrid>
            <CategoryCard href="/category/women">
              <img src="/images/categories/women.jpg" alt="Thời Trang Nữ" />
              <div className="content">
                <h3>Thời Trang Nữ</h3>
                <p>Bộ Sưu Tập Xuân</p>
              </div>
            </CategoryCard>
            <CategoryCard href="/category/men">
              <img src="/images/categories/men.jpg" alt="Thời Trang Nam" />
              <div className="content">
                <h3>Thời Trang Nam</h3>
                <p>Mùa Mới</p>
              </div>
            </CategoryCard>
            <CategoryCard href="/category/accessories">
              <img src="/images/categories/accessories.jpg" alt="Phụ Kiện" />
              <div className="content">
                <h3>Phụ Kiện</h3>
                <p>Những Món Đồ Không Thể Thiếu</p>
              </div>
            </CategoryCard>
          </CategoryGrid>
        </Container>
      </CategorySection>

      <ProductSection>
        <Container>
          <SectionTitle>
            <h2>Sản Phẩm Nổi Bật</h2>
            <p>Được chọn lọc bởi các chuyên gia của chúng tôi</p>
          </SectionTitle>

          <ProductGrid>
            {[1, 2, 3, 4].map((item) => (
              <ProductCard key={item}>
                <div className="image">
                  <img
                    src={`/images/products/product${item}.jpg`}
                    alt={`Sản phẩm ${item}`}
                  />
                  <div className="actions">
                    <button>
                      <i className="icon-heart"></i>
                    </button>
                    <button>
                      <i className="icon-search"></i>
                    </button>
                    <button>
                      <i className="icon-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="info">
                  <h3>
                    <a href={`/product/${item}`}>Đầm Cotton Có Nút</a>
                  </h3>
                  <div className="price">
                    <span className="old">2.300.000₫</span>
                    <span>1.850.000₫</span>
                  </div>
                </div>
              </ProductCard>
            ))}
          </ProductGrid>
        </Container>
      </ProductSection>
    </main>
  );
};

export default HomePage;
