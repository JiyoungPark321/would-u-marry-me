import React from "react";
import { useState } from "react";
import TextEditor from "./textEditor";
import styles from "./storyTemplate2.module.css";

const StoryTemplate1 = () => {
  const [Img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  const [onTextEditor, setOnTextEditor] = useState(false);

  const onImageChange = function (e) {
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  const onTextInput = function () {
    setOnTextEditor(!onTextEditor);
  };
  return (
    <>
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
