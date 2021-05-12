import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType3.module.css';

import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper/core';
import api from '../../../service/api';

SwiperCore.use([EffectFlip, Pagination, Navigation]);


const CarouselType3 = () => {

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    api.get('character', {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        setCharacterData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
  },[]);


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