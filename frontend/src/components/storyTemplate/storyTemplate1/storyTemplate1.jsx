import api from "../../../service/api";
import React from "react";
import { useState } from "react";
import styles from "./storyTemplate1.module.css";

const StoryTemplate1 = ({ image1, setImage1, image2, setImage2, text1, setText1, text2, setText2 }) => {
  
  const [Img1, setImg1] = useState(null);
  const [Img2, setImg2] = useState(null);
  const [imgInput1, setImgInput1] = useState(false);
  const [imgInput2, setImgInput2] = useState(false);
  const [imageHoverCheck1, setImageHoverCheck1] = useState(false);
  const [imageHoverCheck2, setImageHoverCheck2] = useState(false);


  const handleText1 = (e) => {
    const value = e.target.value;
    let totalByte = 0;
    let maxByte = 95;
    let lastIndex = 0
    for (let i = 0; i < value.length; i++) {
      lastIndex = i
      let currentByte = value.charCodeAt(i);
      (96 < currentByte && currentByte < 123) ? totalByte += 0.5 : totalByte++
      if (totalByte > maxByte) {
        break;
      }
    }
    const result = value.substring(0, lastIndex+1);
    setText1(result);
  };

  const handleText2 = (e) => {
    const value = e.target.value;
    let totalByte = 0;
    let maxByte = 95;
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
    setText2(result);
  };

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

  // const sendStory1 = () => {
  //   //axios
  //   let data = new FormData();
  //   data.append("firt", imgFile1);
  //   console.log(imgFile1);
  //   // data.append("second", )
  //   data.append("third", imgFile2);
  //   // data.append("fourth",)
  //   data.append("storyId", 1);
  //   api
  //     .put("/story/first", data, {
  //       headers: { Authorization: localStorage.getItem("jwt") },
  //     })
  //     .then((res) => {
  //       // story template 컴포넌트 끄는 bind함수?
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const onImageChange1 = (e) => {
    setImage1(e.target.files[0]);
    setImg1(URL.createObjectURL(e.target.files[0]));
    if (!imgInput1) {
      setImgInput1(!imgInput1);
    }
  };

  const onImageChange2 = (e) => {
    setImage2(e.target.files[0]);
    setImg2(URL.createObjectURL(e.target.files[0]));
    if (!imgInput2) {
      setImgInput2(!imgInput2);
    }
  };


  return (
    <>
      {/* <button onClick={sendStory1}>test</button> */}
      <div className={styles["template-box"]}>
        <div className={styles["input-box"]}>
          {/* 첫번째 image box */}
          {/* 아무것도 입력 없을 때, */}
          {imgInput1 === false ? (
            <div className={styles["image-box"]}>
              {
                Img1 && <img src={Img1} />
              }
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
              className={styles["input-image-box"]}
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
          {/* 첫번째 텍스트 박스 */}
          <div className={styles["text-box"]}>
            <textarea
              className={styles.text1}
              id="st1-text1-id"
              onChange={handleText1}
              value={text1}
              rows={4}
            />
            <label 
              className={styles["text-icon"]}
              htmlFor="st1-text1-id"
            >
              <i className="fas fa-pencil-alt"></i>
            </label>
          </div>
        </div>
        <div className={styles["input-box"]}>
          <div className={styles["text-box"]}>
            <textarea
              className={styles.text1}
              id="st1-text2-id"
              onChange={handleText2}
              value={text2}
            />
            <label 
              className={styles["text-icon"]}
              htmlFor="st1-text2-id"
            >
              <i className="fas fa-pencil-alt"></i>
            </label>
          </div>
          {/* 두번째 image box */}
          {/* 아무것도 입력 없을 때, */}
          {imgInput2 === false ? (
            <div className={styles["image-box"]}>
              {
                Img2 && <img src={Img2} />
              }
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
              className={styles["input-image-box"]}
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
        </div>
      </div>
    </>
  );
};
export default StoryTemplate1;
