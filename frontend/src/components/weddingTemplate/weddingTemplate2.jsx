import React, { useState } from 'react';
import styles from './weddingTemplate2.module.css'
import SearchPlace from './searchPlace'
import KakaoMap from "./kakaoMap";


const WeddingTemplate2 = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [mapInfo, setMapInfo] = useState({});
  const [mapExist, setMapExist] = useState(false);

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
              dd/mm/yy
            </div>
            <div className={styles['date-button']}>
              00 : 00 PM 
            </div>
            <div className={styles['date-button']}>
              place 
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