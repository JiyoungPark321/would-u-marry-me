import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType4.module.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);


const CarouselType4 = () => {
  const placeData = [
    {
      id: 1,
      img: "https://picsum.photos/230/300",
    },
    {
      id: 2,
      img: "https://picsum.photos/230/301",
    },
    {
      id: 3,
      img: "https://picsum.photos/230/302",
    },
    {
      id: 4,
      img: "https://picsum.photos/230/303",
    },
    {
      id: 5,
      img: "https://picsum.photos/230/304",
    },
    {
      id: 6,
      img: "https://picsum.photos/230/305",
    },
    {
      id: 7,
      img: "https://picsum.photos/230/306",
    },
    {
      id: 8,
      img: "https://picsum.photos/230/307",
    },
    {
      id: 9,
      img: "https://picsum.photos/230/308",
    },
    {
      id: 10,
      img: "https://picsum.photos/230/309",
    },
    {
      id: 11,
      img: "https://picsum.photos/230/310",
    },
    {
      id: 12,
      img: "https://picsum.photos/230/311",
    },
    {
      id: 13,
      img: "https://picsum.photos/230/312",
    },
    {
      id: 14,
      img: "https://picsum.photos/230/313",
    },
    {
      id: 15,
      img: "https://picsum.photos/230/314",
    },
    {
      id: 16,
      img: "https://picsum.photos/230/315",
    },
    {
      id: 17,
      img: "https://picsum.photos/230/316",
    },
    {
      id: 18,
      img: "https://picsum.photos/230/317",
    },
    {
      id: 19,
      img: "https://picsum.photos/230/318",
    },
    {
      id: 20,
      img: "https://picsum.photos/230/319",
    },
  ]


  return (
    <Swiper 
      slidesPerView={5}
      slidesPerGroup={5}
      centeredSlides={true}
      spaceBetween={5}
      grabCursor={true}         
      pagination={{ "clickable": true }}
      navigation={{ "clickable": true }}
      loop={true}
      loopFillGroupWithBlank={true}
      // speed={10}
      className={styles['swiper-container']}>
      {
        placeData.map((data) => {
          return (
            <SwiperSlide
              className={styles['swiper-slide']}
              key={data.id}
            >
              <img 
                src={data.img} 
                className={styles['place-img']}
              />
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default CarouselType4;