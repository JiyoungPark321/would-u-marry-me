import React, { useState } from 'react';
import styles from './weddingTemplate2.module.css'
import SearchPlace from '../kakaoMap/searchPlace'
import KakaoMap from "../kakaoMap/kakaoMap";


const WeddingTemplate2 = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [mapInfo, setMapInfo] = useState({});
  const [mapExist, setMapExist] = useState(false);
  var date = ""
  var time = ""
  var place = ""

  const getMapInfo = (mapInfo) => {
    setMapOpen(false);
    setMapInfo(mapInfo)
    setMapExist(!mapExist)
  }
  const openMapModal = () => {
    setMapOpen(true);
  }
  const closeMapModal = () => {
    setMapOpen(false);
  }
  const onDateChange = function (e) {
    console.log(e.target.value)
    date = e.target.value
    console.log(date)
  };
  const onTimeChange = function (e) {
    console.log(e.target.value)
    time = e.target.value
    console.log(time)
  };
  const onPlaceChange = function (e) {
    console.log(e.target.value)
    place = e.target.value
    console.log(place)
  };
  return (
    <div className={styles['template-box']}>
      <div className={styles['input-area1']}>
        <div className={styles['input-area1-area1']}>
          <div className={styles['title-text']}>INVITATION</div>
          <div className={styles['title-icon']}>
            <i className="fas fa-heart"></i>
          </div>
        </div>
        <div>
          <div className={styles['input-area1-area2']}>
            <div className={styles['text-box1']}>
              <button className={styles['text-button']}>
                <div className={styles['text-icon']}>
                  <i className="fas fa-pencil-alt"></i>
                </div>
              </button>
            </div>
            <div className={styles['date-button']}>
              <input
                className={styles['date-input']}
                type="date"
                onChange={onDateChange}
              />
            </div>
            <div className={styles['date-button']}>
              <input
                className={styles['date-input']}
                type="time"
                onChange={onTimeChange}
              />
            </div>
            <div className={styles['date-button']}>
              <input
                className={styles['date-input']}
                type="text"
                placeholder="Place"
                onChange={onPlaceChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles['input-area2']}>
        <div className={styles['input-area2-area1']}>
          <div className={styles['title-text']}>LOCATION</div>
          <div className={styles['title-icon']}>
            <i className="fas fa-heart"></i>
          </div>
          { mapExist === false
          ?
          <div className={styles['map-box']}>
            <button
              className={styles['text-button']}
              onClick={openMapModal}
            >
              <div className={styles['map-icon']}>
                <i className="fas fa-map-marked-alt"></i>
              </div>
            </button>
          </div>
          :
          <>
          <div className={styles['map-serached']}>
            <KakaoMap 
              mapInfo={mapInfo}
              mapExist={mapExist}  
            >
            </KakaoMap>
          </div>
          </>
          }
        </div>
        <div className={styles['input-area2-area1']}>
          <div className={styles['title-text']}>ACCESS</div>
          <div className={styles['title-icon']}>
            <i className="fas fa-heart"></i>
          </div>
          <div className={styles['text-box2']}>
              <button className={styles['text-button']}>
                <div className={styles['text-icon']}>
                  <i className="fas fa-pencil-alt"></i>
                </div>
              </button>
            </div>
        </div>
      </div>
      { mapOpen === false
        ?
        ''
        :
        <div className={styles['map-component']}>
          <SearchPlace
            open = { mapOpen }
            close = { closeMapModal }
            getMapInfo = {getMapInfo}
          ></SearchPlace>
        </div>
        }
    </div>
  );
};

export default WeddingTemplate2;