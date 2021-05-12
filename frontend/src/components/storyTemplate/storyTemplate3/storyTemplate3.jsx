import React from "react";
import { useState } from "react";
import styles from "./storyTemplate3.module.css";

const StoryTemplate3 = () => {
  const [Img1, setImg1] = useState();
  const [Img2, setImg2] = useState();
  const [Img3, setImg3] = useState();
  const [imgInput1, setImgInput1] = useState(false);
  const [imgInput2, setImgInput2] = useState(false);
  const [imgInput3, setImgInput3] = useState(false);
  const [imageHoverCheck1, setImageHoverCheck1] = useState(false);
  const [imageHoverCheck2, setImageHoverCheck2] = useState(false);
  const [imageHoverCheck3, setImageHoverCheck3] = useState(false);
  const [imgFile1, setImgFile1] = useState();
  const [imgFile2, setImgFile2] = useState();
  const [imgFile3, setImgFile3] = useState();

  const imageMouseOn1 = () => {
    setImageHoverCheck1(true);
  };
  const imageMouseOut1 = () => {
    setImageHoverCheck1(false);
  };
  const imageMouseOn2 = () => {
    setImageHoverCheck2(true);
  };
  const imageMouseOut2 = () => {
    setImageHoverCheck2(false);
  };
  const imageMouseOn3 = () => {
    setImageHoverCheck3(true);
  };
  const imageMouseOut3 = () => {
    setImageHoverCheck3(false);
  };
  const onImageChange1 = function (e) {
    setImgFile1(e.target.files[0]);
    setImg1(URL.createObjectURL(e.target.files[0]));
    if (!imgInput1) {
      setImgInput1(!imgInput1);
    }
  };
  const onImageChange2 = function (e) {
    setImgFile2(e.target.files[0]);
    setImg2(URL.createObjectURL(e.target.files[0]));
    if (!imgInput2) {
      setImgInput2(!imgInput2);
    }
  };
  const onImageChange3 = function (e) {
    setImgFile3(e.target.files[0]);
    setImg3(URL.createObjectURL(e.target.files[0]));
    if (!imgInput3) {
      setImgInput3(!imgInput3);
    }
  };

  return (
    <div className={styles["template-box"]}>
      <div className={styles["text-box"]}>
        <button className={styles["text-button"]}>
          <div className={styles["text-icon"]}>
            <i className="fas fa-pencil-alt"></i>
          </div>
        </button>
      </div>
      <div className={styles["images-container"]}>
        {/* 첫번째 photobox */}
        {imgInput1 === false ? (
          <div className={styles["image-box1"]}>
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
        ) : (
          // 입력 넣었을 때 - hover X
          <div
            className={styles["input-image-box1"]}
            onMouseEnter={imageMouseOn1}
            onMouseLeave={imageMouseOut1}
          >
            {imageHoverCheck1 === false ? (
              <label className={styles["input-image-done"]}>
                <img src={Img1} className={styles["inputed-image"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange1}
                />
              </label>
            ) : (
              // 이미지 넣고 hover O
              <label className={styles["input-image-done"]}>
                <img src={Img1} className={styles["inputed-image-on"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange1}
                />
                <div
                  className={styles["image-icon-done"]}
                  onMouseEnter={imageMouseOn1}
                >
                  <i className="fas fa-camera"></i>
                </div>
              </label>
            )}
          </div>
        )}

        {/* 두번째 photobox */}
        {imgInput2 === false ? (
          <div className={styles["image-box2"]}>
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
        ) : (
          // 입력 넣었을 때 - hover X
          <div
            className={styles["input-image-box2"]}
            onMouseEnter={imageMouseOn2}
            onMouseLeave={imageMouseOut2}
          >
            {imageHoverCheck2 === false ? (
              <label className={styles["input-image-done"]}>
                <img src={Img2} className={styles["inputed-image"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange2}
                />
              </label>
            ) : (
              // 이미지 넣고 hover O
              <label className={styles["input-image-done"]}>
                <img src={Img2} className={styles["inputed-image-on"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange2}
                />
                <div
                  className={styles["image-icon-done"]}
                  onMouseEnter={imageMouseOn2}
                >
                  <i className="fas fa-camera"></i>
                </div>
              </label>
            )}
          </div>
        )}
        {/* 세번째 photobox */}
        {imgInput3 === false ? (
          <div className={styles["image-box3"]}>
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
        ) : (
          // 입력 넣었을 때 - hover X
          <div
            className={styles["input-image-box3"]}
            onMouseEnter={imageMouseOn3}
            onMouseLeave={imageMouseOut3}
          >
            {imageHoverCheck3 === false ? (
              <label className={styles["input-image-done"]}>
                <img src={Img3} className={styles["inputed-image"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange3}
                />
              </label>
            ) : (
              // 이미지 넣고 hover O
              <label className={styles["input-image-done"]}>
                <img src={Img3} className={styles["inputed-image-on"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange3}
                />
                <div
                  className={styles["image-icon-done"]}
                  onMouseEnter={imageMouseOn3}
                >
                  <i className="fas fa-camera"></i>
                </div>
              </label>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryTemplate3;
