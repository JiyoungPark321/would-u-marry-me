import React from "react";
import api from '../../service/api';
import { useState } from "react";
import TextEditor from "./textEditor";
import styles from "./storyTemplate2.module.css";

const StoryTemplate2 = () => {
  const [Img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  const [imgInput1, setImgInput1] = useState(false);
  const [onTextEditor, setOnTextEditor] = useState(false);
  const onImageChange = function (e) {
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
    if (!imgInput1) {
      setImgInput1(!imgInput1);
    }
  };
  const onTextInput = function () {
    setOnTextEditor(!onTextEditor);
  };
  const sendStory2 = () => {  //axios
    let data = new FormData();
    data.append("firt", imgFile);
    // data.append("second", )
    data.append("storyId", 2)
    api.put('/story/second',data, {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
    .then((res) => {
      // story template 컴포넌트 끄는 bind함수? 
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      {/* image box */}
      {imgInput1 === false ? (
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
      ) : (
        <div className={styles["input-image-box"]}>
          <label className={styles["input-image-done"]}>
            <img src={Img} className={styles["inputed-image"]} />
            <input
              type="file"
              className={styles["image-input"]}
              onChange={onImageChange}
            />
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
      )}
    </>
  );
};
export default StoryTemplate2;
