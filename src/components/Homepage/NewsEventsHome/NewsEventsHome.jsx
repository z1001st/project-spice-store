import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NewsEventsHome() {
  const newsData = useSelector((state) => state.cartreducer.newsData);

  return (
    <>
      <div id="news-events">
        <h3 className="text-center">NEWS &amp; EVENTS</h3>
        <div className="green-border-home" />

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
        loop={true}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
          style={{ marginTop: 35 }}
         
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id}>
              <Link to={`/blog/${news.id}`}>
                <div className="card events-box">
                  <img
                    src={news.imageUrl}
                    className=" img fluid"
                    title={`Image for ${news.title}`}
                  />
                  <div className="card-body text-start">
                    <h5 className="card-title text-left">{news.title}</h5>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
