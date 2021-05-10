import React, {useState} from 'react';
import styles from './weddingTemplate3.module.css'
import SearchPlace from './searchPlace'
import KakaoMap from "./kakaoMap";

const WeddingTemplate3 = () => {
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
    console.log('hi')

    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  
  return (
    <div className={styles['template-box']}>
      <div className={styles['input-area1']}>
        <div className={styles['text-box1']}>
          <button className={styles['text-button1']}>
            <div className={styles['text-icon1']}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>
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
      <div className={styles['input-area2']}>
        <div className={styles['text-box2']}>
          <button className={styles['text-button2']}>
            <div className={styles['text-icon2']}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>
        <div className={styles['info-man']}>
          <div className={styles['info-man-title']}>신랑</div>
          <div className={styles['info-man-text-area']}>
            <input type="text"
              className={styles['info-man-text']}
              placeholder="PhoneNumber"
            />
            <input type="text"
              className={styles['info-man-text']}
              placeholder="AccountNumber"
            />
          </div>
        </div>
        <div className={styles['info-woman']}>
          <div className={styles['info-woman-title']}>신부</div>
            <div className={styles['info-woman-text-area']}>
              <input type="text"
                className={styles['info-woman-text']}
                placeholder="PhoneNumber"
              />
              <input type="text"
                className={styles['info-woman-text']}
                placeholder="AccountNumber"
              />
            </div>
        </div>
        { mapExist === false
          ?
          <div className={styles['map-box']}>
            <button
              className={styles['text-button2']}
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

export default WeddingTemplate3;