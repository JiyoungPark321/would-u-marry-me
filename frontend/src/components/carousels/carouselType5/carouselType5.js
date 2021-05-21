import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import api from '../../../service/api';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType5.module.css';

import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);


const CarouselType5 = ({ setStoryTemplateId }) => {

  const [storyTemplateData, setStoryTemplateData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);


  useEffect(() => {
    api.get('/storytemplate', {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        setStoryTemplateData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
  },[]);
  
  const choiceStoryTemplate = (storyTemplateId) => {
    setStoryTemplateId(storyTemplateId);
    console.log(storyTemplateId);
  };


  return (
    <>
      {
        storyTemplateData.length > 0
        ?
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
            storyTemplateData.map((data, index) => {
              return (
                <SwiperSlide
                  className={styles['swiper-slide']}
                  key={data.id}
                >
                  <div className={styles['img-container']}>
                    <img 
                      src={data.imgUrl} 
                      className={`${styles['template-img']} ${index === selectedIndex ? styles.selected : ''}`}
                      onClick={()=> {choiceStoryTemplate(data.id)
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
        </div>
        :
        <p>목록이 비어있습니다.</p>
      }
    </>
  );
};

export default CarouselType5;