import React from "react";
import { useState } from "react";
import TextEditor from "../textEditor";
import styles from "./storyTemplate2.module.css";

const StoryTemplate1 = () => {
  const [Img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  const [imgInput, setImgInput] = useState(false);
  const [onTextEditor, setOnTextEditor] = useState(false);
  const [imageHoverCheck1, setImageHoverCheck1] = useState(false);

  const imageMouseOn1 = () => {
    setImageHoverCheck1(true);
  };
  const imageMouseOut1 = () => {
    setImageHoverCheck1(false);
  };
  const onImageChange = function (e) {
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
    if (!imgInput) {
      setImgInput(!imgInput);
    }
  };
  const onTextInput = function () {
    setOnTextEditor(!onTextEditor);
  };
  return (
    <>
      <div className={styles["template-box"]}>
        {/* <div className={styles["image-box"]}>
          <img src={Img} />
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
        </div> */}
        {/* 첫번째 image box */}
        {/* 아무것도 입력 없을 때, */}
        {imgInput === false ? (
          <div className={styles["image-box"]}>
            <img src={Img} />
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
          <button className={styles["text-button"]} onClick={onTextInput}>
            <div className={styles["text-icon"]}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>
        {onTextEditor === false ? "" : <TextEditor></TextEditor>}
      </div>
    </>
  );
};
export default StoryTemplate1;
