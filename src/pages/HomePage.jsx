import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroSlide = styled.div`
  height: 100%;
  background-image: url("/images/hero/slide1.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 15px;
`;

const HeroContent = styled.div`
  max-width: 600px;
  color: #000;

  h2 {
    font-size: 60px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 40px;
    color: #666;
  }
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
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #333;
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
  return (
    <main>
      <HeroSection>
        <HeroSlide>
          <Container>
            <HeroContent>
              <h2>New Arrivals Collection 2024</h2>
              <p>
                Discover our latest collection of fashion items. From casual
                wear to elegant dresses, find your perfect style.
              </p>
              <Button href="/shop">Shop Now</Button>
            </HeroContent>
          </Container>
        </HeroSlide>
      </HeroSection>

      <CategorySection>
        <Container>
          <SectionTitle>
            <h2>Shop By Category</h2>
            <p>Find your favorite products by category</p>
          </SectionTitle>

          <CategoryGrid>
            <CategoryCard href="/category/women">
              <img src="/images/categories/women.jpg" alt="Women's Fashion" />
              <div className="content">
                <h3>Women's Fashion</h3>
                <p>Spring Collection</p>
              </div>
            </CategoryCard>
            <CategoryCard href="/category/men">
              <img src="/images/categories/men.jpg" alt="Men's Fashion" />
              <div className="content">
                <h3>Men's Fashion</h3>
                <p>New Season</p>
              </div>
            </CategoryCard>
            <CategoryCard href="/category/accessories">
              <img src="/images/categories/accessories.jpg" alt="Accessories" />
              <div className="content">
                <h3>Accessories</h3>
                <p>Must Have Items</p>
              </div>
            </CategoryCard>
          </CategoryGrid>
        </Container>
      </CategorySection>

      <ProductSection>
        <Container>
          <SectionTitle>
            <h2>Featured Products</h2>
            <p>Handpicked by our experts</p>
          </SectionTitle>

          <ProductGrid>
            {[1, 2, 3, 4].map((item) => (
              <ProductCard key={item}>
                <div className="image">
                  <img
                    src={`/images/products/product${item}.jpg`}
                    alt={`Product ${item}`}
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
                    <a href={`/product/${item}`}>Cotton Dress with Buttons</a>
                  </h3>
                  <div className="price">
                    <span className="old">$99.00</span>
                    <span>$79.00</span>
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
