import React, { useState } from 'react';
import styles from './weddingTemplate1.module.css'
import SearchPlace from './searchPlace'
import KakaoMap from "./kakaoMap";

const WeddingTemplate1 = () => {
  const [img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
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
  const onImageChange = function (e) {
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className={styles['template-box']}>
        <div className={styles['input-area1']}>
          <div className={styles['image-box']}>
            <img src={img}/>
              <label className={styles['image-button']}>
                <div className={styles['image-icon']}>
                  <i className="fas fa-camera"></i>
                    <input
                      type="file"
                      className={styles['image-input']}
                      onChange={onImageChange}
                    />
                </div>
              </label>
          </div>
        </div>
        <div className={styles['input-area2']}>
          <div className={styles['date-button']}>
            <input
              // className={styles['date-input']}
              type="date" 
              placeholder="dd/mm/yy"
            />
            <i className="fas fa-caret-down"></i>
          </div>
          <div className={styles['text-box1']}>
            <button className={styles['text-button']}>
              <div className={styles['text-icon']}>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </button>
          </div>
          <div className={styles['date-button']}>
            00 : 00 PM 
          </div>
          <div className={styles['date-button']}>
            place 
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
            <KakaoMap 
              mapInfo={mapInfo}
              mapExist={mapExist}  
            >
            </KakaoMap>
          }
          <div className={styles['text-box2']}>
            <button className={styles['text-button']}
            >
              <div className={styles['text-icon']}>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </button>
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

export default WeddingTemplate1;