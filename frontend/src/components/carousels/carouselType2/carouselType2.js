import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType2.module.css';

import SwiperCore, { EffectCube, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([EffectCube, Pagination, Navigation]);


const CarouselType2 = () => {
  const musicData = [
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
  ]


  return (
    <Swiper 
      effect={'cube'} 
      grabCursor={true} 
      cubeEffect={{
        "shadow": true,
        "slideShadows": true,
        "shadowOffset": 50,
        "shadowScale": 0.94,
      }}        
      pagination={{ "clickable": true }}
      navigation={{ "clickable": true }}
      loop={true}
      speed={3000}
      className={styles['swiper-container']}>
      <div className={styles['swiper-wrapper']}>
      {
        musicData.map((data) => {
          return (
            <SwiperSlide
              className={styles['swiper-slide']}
              key={data.id}
            >
              <img 
                src={data.img} 
                className={styles['album-img']}
              />
            </SwiperSlide>
          );
        })
      }
      </div>
    </Swiper>
  );
};

export default CarouselType2;