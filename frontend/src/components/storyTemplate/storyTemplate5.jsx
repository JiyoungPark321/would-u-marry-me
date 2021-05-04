import React from "react";
import { useState } from "react";
// import TextEditor from "./textEditor";
import styles from "./storyTemplate5.module.css";

const StoryTemplate5 = () => {
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
    <div className={styles["template-box"]}>
      <div className={styles["header-box"]}>
        <div className={styles["header"]}>
          <button className={styles["text-button"]}>
            <div className={styles["text-icon"]}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>
      </div>
      <div className={styles["photos-container"]}>
        {/* 첫번째 photobox */}
        <div className={styles["photo-box1"]}>
          <img src={Img1} className={styles["input-image"]} />
          <label className={styles["image-button"]}>
            <div className={styles["image-icon"]}>
              <i className="fas fa-camera"></i>
              <input
                type="file"
                className={styles["image-input"]}
                onChange={onImageChange1}
              />
            </div>
          </label>
        </div>
        {/* 두번째 photobox */}
        <div className={styles["photo-box2"]}>
          <img src={Img2} className={styles["input-image"]} />
          <label className={styles["image-button"]}>
            <div className={styles["image-icon"]}>
              <i className="fas fa-camera"></i>
              <input
                type="file"
                className={styles["image-input"]}
                onChange={onImageChange2}
              />
            </div>
          </label>
        </div>
        {/* 세번째 photobox */}
        <div className={styles["photo-box3"]}>
          <img src={Img3} className={styles["input-image"]} />
          <label className={styles["image-button"]}>
            <div className={styles["image-icon"]}>
              <i className="fas fa-camera"></i>
              <input
                type="file"
                className={styles["image-input"]}
                onChange={onImageChange3}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default StoryTemplate5;
