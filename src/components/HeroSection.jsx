import { useEffect, useState } from "react";
import {
  Button,
  HeroContainer,
  HeroContent,
  HeroSectionWrapper,
  HeroSlide,
  HeroSlideWrapper,
  NavigationButton,
  SlideButton,
  SlideControls,
} from "../pages/client/HomePage";

const bannerImages = [
  "/src/assets/images/banner/slider1.png",
  "/src/assets/images/banner/slider6.png",
  "/src/assets/images/banner/slider3.png",
];

const heroContentData = [
  {
    title: "Bộ Sưu Tập Mới 2025",
    description:
      "Khám phá bộ sưu tập sản phẩm thể thao mới nhất của chúng tôi. Hãy tìm phong cách hoàn hảo phù hợp với bạn.",
    buttonText: "Mua Ngay",
    buttonLink: "/products",
  },
  {
    title: "Bộ Sưu Tập Thời Trang",
    description:
      "Cập nhật tủ đồ của bạn với những thiết kế thể thao thời thượng nhất. Từ casual đến formal, chúng tôi có tất cả những gì bạn cần.",
    buttonText: "Mua Sắm",
    buttonLink: "/products",
  },
  {
    title: "Bộ Sưu Tập Giới Hạn",
    description:
      "Đừng bỏ lỡ cơ hội sở hữu những thiết kế độc đáo từ bộ sưu tập giới hạn của chúng tôi. Số lượng có hạn!",
    buttonText: "Xem Ngay",
    buttonLink: "/products",
  },
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setSlide((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1));
  };

  const handleSlideClick = (index) => {
    setIsAnimating(true);
    setSlide(index);
  };

  // ✅ Auto slide với setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 giây chuyển slide

    return () => clearInterval(interval); // dọn dẹp khi component unmount
  }, []);

  // ✅ Reset isAnimating mỗi lần slide thay đổi
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 4000); // thời gian animation (nếu có)

    return () => clearTimeout(timeout);
  }, [slide]);

  return (
    <HeroSectionWrapper>
      <HeroContainer>
        <HeroContent>
          <h2 className={!isAnimating ? "active" : ""}>
            {heroContentData[slide].title}
          </h2>
          <p className={!isAnimating ? "active" : ""}>
            {heroContentData[slide].description}
          </p>
          <Button
            href={heroContentData[slide].buttonLink}
            className={!isAnimating ? "active" : ""}
          >
            {heroContentData[slide].buttonText}
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

      <NavigationButton direction="prev" onClick={handlePrev} />
      <NavigationButton direction="next" onClick={handleNext} />
    </HeroSectionWrapper>
  );
}
