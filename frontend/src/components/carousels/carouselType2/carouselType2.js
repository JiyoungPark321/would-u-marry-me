import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import styles from './carouselType2.module.css';

import SwiperCore, { EffectCube, Pagination, Navigation } from 'swiper/core';
import api from '../../../service/api';

SwiperCore.use([EffectCube, Pagination, Navigation]);


const CarouselType2 = ({ setMusicId }) => {

  const [musicData, setMusicData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);


  useEffect(() => {
    api.get('/music', {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        setMusicData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
  },[]);


  const choiceMusic = (musicId) => {
    setMusicId(musicId);
  };



  return (
    <>
      {
        musicData.length > 0
        ?
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
            musicData.map((data, index) => {
              return (
                <SwiperSlide
                  className={styles['swiper-slide']}
                  key={data.id}
                >
                  <img 
                    className={`${styles['album-img']} ${index === selectedIndex ? styles.selected : ''}`}
                    src={data.musicImgUrl} 
                    onClick={() => {choiceMusic(data.id)
                      setSelectedIndex(index);
                    }}
                  />
                  <div className={styles['about-music-container']}>
                    <div className={styles['info-container']}>
                      <p className={styles['title']}>{data.title}</p>
                      <span className={styles['divider']}>ㅡ</span>
                      <p>{data.artist}</p>
                    </div>
                    <audio
                      className={styles['audio-controller']}
                      src={data.musicUrl} 
                      controls
                      controlsList="nodownload"
                    ></audio>
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

export default CarouselType2;