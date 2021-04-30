import React, { useState } from 'react';
import styles from './invitationTemplate1.module.css'
import KakaoMap from './kakaoMap'

const InvitationTemplate1 = () => {
  const [Img, setImg] = useState();
  const [imgFile, setImgFile] = useState();

  const onImageChange = function (e) {
    console.log('hi')
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className={styles.template_box}>
        <div className={styles.input_area1}>
          <div className={styles.image_box}>
            <img src={Img}/>
              <label className={styles.image_button}>
                <div className={styles.image_icon}>
                  <i className="fas fa-camera"></i>
                    <input
                      type="file"
                      className={styles.image_input}
                      onChange={onImageChange}
                    />
                </div>
              </label>
          </div>
        </div>
        <div className={styles.input_area2}>
          <div className={styles.date_button}>
            dd/mm/yy
          </div>
          <div className={styles.text_box1}>
            <button className={styles.text_button}>
              <div className={styles.text_icon}>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </button>
          </div>
          <div className={styles.date_button}>
            00 : 00 PM 
          </div>
          <div className={styles.map_box}>
            <button className={styles.text_button}>
              <div className={styles.map_icon}>
                <i className="fas fa-map-marked-alt"></i>
              </div>
            </button>
          </div>
          <div className={styles.text_box2}>
            <button className={styles.text_button}>
              <div className={styles.text_icon}>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </button>
          </div>
        </div>
        <KakaoMap></KakaoMap>
    </div>
  );
};

export default InvitationTemplate1;