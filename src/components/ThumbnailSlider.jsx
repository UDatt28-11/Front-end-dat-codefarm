import React from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const SliderContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px;
  border-radius: 10px;
`;

const ThumbImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;

  &.swiper-slide-thumb-active {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbnailSlider = ({ images, activeIndex, onSlideChange }) => {
  return (
    <SliderContainer>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbnail-slider"
        slideToClickedSlide={true}
        centeredSlides={true}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ThumbImage className={activeIndex === index ? 'swiper-slide-thumb-active' : ''}>
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </ThumbImage>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default ThumbnailSlider; 