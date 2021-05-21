import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import api from '../../../service/api';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType6.module.css';

import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);


const CarouselType6 = ({ setWeddingTemplateId }) => {

  const [weddingTemplateData, setWeddingTemplateData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);


  useEffect(() => {
    api.get('/weddingcardtemplate', {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        setWeddingTemplateData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
  },[]);
  
  const choiceWeddingTemplate = (weddingTemplateId) => {
    setWeddingTemplateId(weddingTemplateId);
    console.log(weddingTemplateId);
  };


  return (
    <>
      {
        weddingTemplateData.length > 0
        ?
        <div>
        <Swiper 
          slidesPerView={2}
          slidesPerColumn={2}
          slidesPerGroup={2}
          spaceBetween={30}
          grabCursor={true}
          navigation={{ "clickable": true }}
          // 웨딩 템플릿 추가할수 있으므로 아래 주석 삭제 금지
          // loop={true}
          // loopFillGroupWithBlank={true}
          speed={1000}
          className={styles['swiper-container']}>
          <div className={styles['swiper-wrapper']}>
          {
            weddingTemplateData.map((data, index) => {
              return (
                <SwiperSlide
                  className={styles['swiper-slide']}
                  key={data.id}
                >
                  <div className={styles['img-container']}>
                    <img 
                      src={data.imgUrl} 
                      className={`${styles['template-img']} ${index === selectedIndex ? styles.selected : ''}`}
                      onClick={()=> {choiceWeddingTemplate(data.id)
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

export default CarouselType6;