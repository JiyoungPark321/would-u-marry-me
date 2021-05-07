import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType1.module.css';

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const CarouselType1 = () => {
  const backgroundData = [
    {
      id: 1,
      img: "https://picsum.photos/500/500",
    },
    {
      id: 2,
      img: "https://picsum.photos/500/501",
    },
    {
      id: 3,
      img: "https://picsum.photos/500/502",
    },
    {
      id: 4,
      img: "https://picsum.photos/500/503",
    },
    {
      id: 5,
      img: "https://picsum.photos/500/504",
    },
  ]


  return (
    <Swiper 
      effect={'coverflow'} 
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
      }}        
      pagination={{ "clickable": true }}
      navigation={{ "clickable": true }}
      loop={true}
      speed={1000}
      className={styles['swiper-container']}>
      <div className={styles['swiper-wrapper']}>
      {
        backgroundData.map((data) => {
          return (
            <SwiperSlide
              className={styles['swiper-slide']}
              key={data.id}
            >
              <img 
                src={data.img} 
                className={styles['background-img']}
              />
            </SwiperSlide>
          );
        })
      }
      </div>
    </Swiper>
  );
};

export default CarouselType1;