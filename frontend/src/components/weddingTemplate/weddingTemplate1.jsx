import React, { useState } from 'react';
import styles from './weddingTemplate1.module.css'
import SearchPlace from './searchPlace'
const WeddingTemplate1 = () => {
  const [Img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  const [isMap, setIsMap] = useState(false);
  const onImageChange = function (e) {
    console.log('hi')
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  const onMapClick = function () {
    console.log('gomap')
    setIsMap(!isMap)
    console.log(isMap)
  }
  return (
    <div className={styles['template-box']}>
        <div className={styles['input-area1']}>
          <div className={styles['image-box']}>
            <img src={Img}/>
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
            dd/mm/yy
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
          <div className={styles['map-box']}>
            <button
              className={styles['text-button']}
              onClick={onMapClick}
            >
              <div className={styles['map-icon']}>
                <i className="fas fa-map-marked-alt"></i>
              </div>
            </button>
          </div>
          <div className={styles['text-box2']}>
            <button className={styles['text-button']}
            >
              <div className={styles['text-icon']}>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </button>
          </div>
        </div>
        { isMap === false
        ?
        ''
        :
        <div className={styles['map-component']}>
          <SearchPlace></SearchPlace>
        </div>
        }
    </div>
  );
};

export default WeddingTemplate1;