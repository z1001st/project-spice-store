// SliderImagesCombined.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './sliderImages.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SliderImagesCombinedThumbs({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slider-images-combined">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="sliderProductImages"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} title={`Image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="sliderProductImages2 pb-3"
        breakpoints={{
          991: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 4,
          },
        }}
      >
        <div>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} title={`Image ${index}`} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
