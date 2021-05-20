import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import styles from './carouselType1.module.css';
import api from '../../../service/api';

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


const CarouselType1 = ({ setBackgroundUrl, setBackgroundId }) => {

  const [backgroundData, setBackgroundData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    api.get('/background', {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        setBackgroundData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
  },[]);


  const choiceBackground = (backgroundImgUrl, backgroundImgId) => {
    setBackgroundUrl(backgroundImgUrl);
    setBackgroundId(backgroundImgId);
  };


  return (
    <>
      {
        backgroundData.length > 0 
        ?
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
          className={styles['swiper-container']}
        >
          <div className={styles['swiper-wrapper']}>
            {
              backgroundData.map((data, index) => {
                return (
                  <SwiperSlide
                    className={styles['swiper-slide']}
                    key={data.id}
                  >
                    <div className={styles['img-container']}>
                      <img 
                        src={data.backgroundImgUrl} 
                        className={`${styles['background-img']} ${index === selectedIndex ? styles.selected : ''}`}
                        onClick={() => {choiceBackground(data.backgroundImgUrl, data.id);
                          setSelectedIndex(index);
                        }}
                      />
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </div>
        </Swiper>
        :
        <p>목록이 비어있습니다.</p>
      }
    </>
  );
};

export default CarouselType1;