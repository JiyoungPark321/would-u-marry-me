import React from "react";
import { useState } from "react";
import styles from "./storyTemplate1.module.css";

const StoryTemplate1 = () => {
  const [Img1, setImg1] = useState();
  const [Img2, setImg2] = useState();
  const [imgFile1, setImgFile1] = useState();
  const [imgFile2, setImgFile2] = useState();
  const [imgInput1, setImgInput1] = useState(false);
  const [imageHoverCheck1, setImageHoverCheck1] = useState(false);
  const [imageHoverCheck2, setImageHoverCheck2] = useState(false);
  const [imgInput2, setImgInput2] = useState(false);
  const [onTextEditor, setOnTextEditor] = useState(false);

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
  const onTextInput = function () {
    setOnTextEditor(!onTextEditor);
  };
  return (
    <>
      <div className={styles["template-box"]}>
        <div className={styles["input-box"]}>
          {/* 첫번째 image box */}
          {/* 아무것도 입력 없을 때, */}
          {imgInput1 === false ? (
            <div className={styles["image-box"]}>
              <img src={Img1} />
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
            <button className={styles["text-button"]}>
              <div className={styles["text-icon"]}>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </button>
          </div>
        </div>
        <div className={styles["input-box"]}>
          <div className={styles["text-box"]}>
            <button className={styles["text-button"]} onClick={onTextInput}>
              <div className={styles["text-icon"]}>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </button>
          </div>
          {/* 두번째 image box */}
          {/* 아무것도 입력 없을 때, */}
          {imgInput2 === false ? (
            <div className={styles["image-box"]}>
              <img src={Img2} />
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
        {/* {onTextEditor === false ? "" : <TextEditor></TextEditor>} */}
      </div>
    </>
  );
};
export default StoryTemplate1;
