import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './slider.css';
import { Link } from 'react-router-dom';

const sliderImages = [
  'https://www.dace.vn/wp-content/uploads/2023/03/DSC00663-scaled.jpg',
  'https://www.dace.vn/wp-content/uploads/2022/02/DSC00657-1024x683.jpg',
  'https://www.dace.vn/wp-content/uploads/2023/03/2.-VNL-3-1-scaled-e1678446663873.jpg',
  'https://www.dace.vn/wp-content/uploads/2023/03/2.-VNL-4-scaled.jpg',
];

function Slider() {
  return (
    <div id="slider" className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider-home"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} title={`Slide ${index + 1}`} />
            <div className="slide-content">
              <h2>More Than Spices</h2>
              <Link to= "/about"  className="btn-about-us">
               ABOUT US
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
