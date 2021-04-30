import React from 'react';
import {useState} from 'react'
import styles from "./weddingTemplate3.module.css"

const WeddingTemplate3 = () => {
  const [Img1, setImg1] = useState();
  const [Img2, setImg2] = useState();
  const [Img3, setImg3] = useState();
  const [imgFile1, setImgFile1] = useState();
  const [imgFile2, setImgFile2] = useState();
  const [imgFile3, setImgFile3] = useState();
  const onImageChange1 = function (e) {
    setImgFile1(e.target.files[0]);
    setImg1(URL.createObjectURL(e.target.files[0]));
  };
  const onImageChange2 = function (e) {
    setImgFile2(e.target.files[0]);
    setImg2(URL.createObjectURL(e.target.files[0]));
  };
  const onImageChange3 = function (e) {
    setImgFile3(e.target.files[0]);
    setImg3(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className={styles.template_box}>
      <div className={styles.input_box}>
        <div className={styles.image_box1}>
          <img src={Img1}/>
            <label className={styles.image_button}>
              <div className={styles.image_icon}>
                <i className="fas fa-camera"></i>
                  <input
                    type="file"
                    className={styles.image_input}
                    onChange={onImageChange1}
                  />
              </div>
            </label>
        </div>
        <div className={styles.text_box}>
          <button className={styles.text_button}>
            <div className={styles.text_icon}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>

        <div className={styles.image_box2}>
          <img src={Img2}/>
            <label className={styles.image_button}>
              <div className={styles.image_icon}>
                <i className="fas fa-camera"></i>
                  <input
                    type="file"
                    className={styles.image_input}
                    onChange={onImageChange2}
                  />
              </div>
            </label>
        </div>
        <div className={styles.image_box3}>
          <img src={Img3}/>
            <label className={styles.image_button}>
              <div className={styles.image_icon}>
                <i className="fas fa-camera"></i>
                  <input
                    type="file"
                    className={styles.image_input}
                    onChange={onImageChange3}
                  />
              </div>
            </label>
        </div>
      </div>
    </div>
  );
};

export default WeddingTemplate3;