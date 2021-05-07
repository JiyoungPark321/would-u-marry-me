import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType5.module.css';

import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);


const CarouselType5 = () => {
  const templateData = [
    {
      id: 1,
      img: "https://picsum.photos/700/350",
    },
    {
      id: 2,
      img: "https://picsum.photos/700/351",
    },
    {
      id: 3,
      img: "https://picsum.photos/700/352",
    },
    {
      id: 4,
      img: "https://picsum.photos/700/353",
    },
    {
      id: 5,
      img: "https://picsum.photos/700/354",
    },
    {
      id: 6,
      img: "https://picsum.photos/700/355",
    },
    {
      id: 7,
      img: "https://picsum.photos/700/356",
    },
    {
      id: 8,
      img: "https://picsum.photos/700/357",
    },
    {
      id: 9,
      img: "https://picsum.photos/700/358",
    },
    {
      id: 10,
      img: "https://picsum.photos/700/359",
    },
  ]


  return (
    <div>
    <Swiper 
      slidesPerView={2}
      slidesPerColumn={2}
      slidesPerGroup={2}
      spaceBetween={30}
      grabCursor={true}
      navigation={{ "clickable": true }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={1000}
      className={styles['swiper-container']}>
      <div className={styles['swiper-wrapper']}>
      {
        templateData.map((data) => {
          return (
            <SwiperSlide
              className={styles['swiper-slide']}
              key={data.id}
            >
              <div className={styles['img-container']}>
                <img 
                  src={data.img} 
                  className={styles['template-img']}
                />
              </div>
            </SwiperSlide>
          );
        })
      }
      </div>
    </Swiper>
    </div>
  );
};

export default CarouselType5;