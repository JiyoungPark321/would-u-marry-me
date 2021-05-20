import React from "react";
import api from "../../../service/api";
import { useState } from "react";
import styles from "./storyTemplate2.module.css";

const StoryTemplate2 = ({ image1, setImage1, text1, setText1 }) => {
  const [Img, setImg] = useState(null);
  const [imgInput, setImgInput] = useState(false);
  const [imageHoverCheck1, setImageHoverCheck1] = useState(false);


  const handleText1 = (e) => {
    const value = e.target.value;
    let totalByte = 0;
    let maxByte = 85;
    let lastIndex = 0
    for (let i = 0; i < value.length; i++) {
      lastIndex = i
      let currentByte = value.charCodeAt(i);
      (96 < currentByte && currentByte < 123) ? totalByte += 0.85 : totalByte++
      if (totalByte > maxByte) {
        break;
      }
    }
    const result = value.substring(0, lastIndex+1);
    setText1(result);
  };

  const imageMouseOn1 = () => {
    setImageHoverCheck1(true);
  };

  const imageMouseOut1 = () => {
    setImageHoverCheck1(false);
  };

  const onImageChange = function (e) {
    setImage1(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
    if (!imgInput) {
      setImgInput(!imgInput);
    }
  };


  // const sendStory2 = () => {
  //   //axios
  //   let data = new FormData();
  //   data.append("firt", imgFile);
  //   // data.append("second", )
  //   data.append("storyId", 2);
  //   api
  //     .put("/story/second", data, {
  //       headers: { Authorization: localStorage.getItem("jwt") },
  //     })
  //     .then((res) => {
  //       // story template 컴포넌트 끄는 bind함수?
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className={styles["template-box"]}>
        {/* 첫번째 image box */}
        {/* 아무것도 입력 없을 때, */}
        {imgInput === false ? (
          <div className={styles["image-box"]}>
            {
              Img && <img src={Img} className={styles.image1} />
            }
            <label className={styles["image-button"]}>
              <div className={styles["image-icon"]}>
                <i className="fas fa-camera"></i>
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange}
                />
              </div>
            </label>
          </div>
        ) : (
          // 입력 넣었을 때 - hover X
          <div
            className={styles["input-image-box"]}
            onMouseEnter={imageMouseOn1}
            onMouseLeave={imageMouseOut1}
          >
            {imageHoverCheck1 === false ? (
              <label className={styles["input-image-done"]}>
                <img src={Img} className={styles["inputed-image"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange}
                />
              </label>
            ) : (
              // 이미지 넣고 hover O
              <label className={styles["input-image-done"]}>
                <img src={Img} className={styles["inputed-image-on"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange}
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
        <div className={styles["text-box"]}>
          <textarea
            className={styles.text1}
            id="st2-text1-id"
            onChange={handleText1}
            value={text1}
          />
          <label 
            className={styles["text-button"]} 
            htmlFor="st2-text1-id"
          >
            <i className="fas fa-pencil-alt"></i>
          </label>
        </div>
      </div>
    </>
  );
};
export default StoryTemplate2;
