import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType3.module.css';

import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([EffectFlip, Pagination, Navigation]);


const CarouselType3 = () => {
  const characterData = [
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
      effect={'flip'} 
      grabCursor={true} 
      flipEffect={{
        "slideShadows": true,
      }}        
      pagination={{ "clickable": true }}
      navigation={{ "clickable": true }}
      loop={true}
      speed={2500}
      className={styles['swiper-container']}>
      <div className={styles['swiper-wrapper']}>
      {
        characterData.map((data) => {
          return (
            <SwiperSlide
              className={styles['swiper-slide']}
              key={data.id}
            >
              <img 
                src={data.img} 
                className={styles['character-img']}
              />
            </SwiperSlide>
          );
        })
      }
      </div>
    </Swiper>
  );
};

export default CarouselType3;