import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType4.module.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import api from '../../../service/api';

SwiperCore.use([Pagination, Navigation]);


const CarouselType4 = ({ setSpotId }) => {

  const [placeData, setPlaceData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);


  useEffect(() => {
    api.get('/spot',{
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        setPlaceData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
  },[]);

  const choiceSpot = (spotId) => {
    setSpotId(spotId);
  };
  

  return (
    <>
      {
        placeData.length > 0
        ?
        <div className={styles['swiper-container']}>  
        <Swiper 
          slidesPerView={5}
          slidesPerGroup={5}
          // centeredSlides={true}
          initialSlide={1}
          // spaceBetween={5}
          grabCursor={true}         
          pagination={{ "clickable": true }}
          navigation={{ "clickable": true }}
          loop={true}
          loopFillGroupWithBlank={true}
          // speed={10}
          className={styles['swiper']}>
          {
            placeData.map((data, index) => {
              return (
                <SwiperSlide
                  className={styles['swiper-slide']}
                  key={data.id}
                >
                  <div className={`${styles['place-img-container']} ${index === selectedIndex ? styles.selected : ''}`}>
                  <img 
                    src={data.imgUrl} 
                    className={styles['place-img']}
                    onClick={() => {choiceSpot(data.id)
                      setSelectedIndex(index);
                    }}
                  />
                  </div>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
        </div>
        :
        <p>목록이 비어있습니다.</p>
      }
    </>
  );
};

export default CarouselType4;