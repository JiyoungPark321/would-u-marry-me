import React, {useState} from 'react';
import styles from './weddingTemplate4.module.css'
const WeddingTemplate4 = () => {
  const [img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  var dateTime = ""
  var place = ""

  const onImageChange = function (e) {
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  const onDateTimeChange = function (e) {
    console.log(e.target.value)
    dateTime = e.target.value
    console.log(dateTime)
  };
  const onPlaceChange = function (e) {
    console.log(e.target.value)
    place = e.target.value
    console.log(place)
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
        <div className={styles['title-text']}>감사합니다.</div>
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
      </div>
      <div className={styles['input-area2']}>
        <div className={styles['text-box2']}>
          <button className={styles['text-button2']}>
            <div className={styles['text-icon2']}>
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
            <input
              className={styles['date-input']}
              type="datetime-local"
              onChange={onDateTimeChange}
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
  );
};

export default WeddingTemplate4;