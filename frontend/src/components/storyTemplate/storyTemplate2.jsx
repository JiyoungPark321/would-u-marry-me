import React from 'react';
import {useState} from 'react'
import styles from "./storyTemplate2.module.css"

const StoryTemplate2 = () => {
  const [Img1, setImg1] = useState();
  const [Img2, setImg2] = useState();
  // const [imgNum, setImgNum] = useState("");
  const imgNum = ''
  const [imgFile1, setImgFile1] = useState();
  const [imgFile2, setImgFile2] = useState();

  const onImageChange1 = function (e) {
    console.log('hi')
    setImgFile1(e.target.files[0]);
    setImg1(URL.createObjectURL(e.target.files[0]));
  };
  const onImageChange2 = function (e) {
    setImgFile2(e.target.files[0]);
    setImg2(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
    <div className={styles['template-box']}>
      <div className={styles['input-box']}>
        <div className={styles['image-box']}>
          <img src={Img1}/>
            <label className={styles['image-button']}>
              <div className={styles['image-icon']}>
                <i className="fas fa-camera"></i>
                  <input
                    type="file"
                    className={styles['image-input']}
                    onChange={onImageChange1}
                  />
              </div>
            </label>
        </div>
        <div className={styles['text-box']}>
          <button className={styles['text-button']}>
            <div className={styles['text-icon']}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>
        <div className={styles['text-box']}>
          <button className={styles['text-button']}>
            <div className={styles['text-icon']}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>
        <div className={styles['image-box']}>
          <img src={Img2}/>
          <label className={styles['image-button']}>
            <div className={styles['image-icon']}>
              <i className="fas fa-camera"></i>
                <input
                  type="file"
                  className={styles['image-input']}
                  onChange={onImageChange2}
                />
            </div>
          </label>
        </div>
      </div>
    </div>
    </>
  );
}
export default StoryTemplate2;