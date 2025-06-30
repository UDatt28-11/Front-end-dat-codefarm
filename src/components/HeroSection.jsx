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

export default function HeroSection({
  slide,
  isAnimating,
  onNext,
  onPrev,
  onSlideClick,
}) {
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
              onClick={() => onSlideClick(index)}
            />
          ))}
        </SlideControls>
      </HeroContainer>

      <NavigationButton direction="prev" onClick={onPrev} />
      <NavigationButton direction="next" onClick={onNext} />
    </HeroSectionWrapper>
  );
}
