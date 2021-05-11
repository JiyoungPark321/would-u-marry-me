import api from '../../service/api';
import React from "react";
import { useState } from "react";
import styles from "./storyTemplate1.module.css";

const StoryTemplate1 = () => {
  const [Img1, setImg1] = useState();
  const [Img2, setImg2] = useState();
  const [imgFile1, setImgFile1] = useState();
  const [imgFile2, setImgFile2] = useState();
  const [imgInput1, setImgInput1] = useState(false);
  const [imgInput2, setImgInput2] = useState(false);
  const [onTextEditor, setOnTextEditor] = useState(false);

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
  const sendStory1 = () => {  //axios
    let data = new FormData();
    data.append("firt", imgFile1);
    console.log(imgFile1)
    // data.append("second", )
    data.append("third", imgFile2);
    // data.append("fourth",)
    data.append("storyId", 1);
    api.put('/story/first',data, {
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
      {/* <button onClick={sendStory1}>test</button> */}
      <div className={styles["template-box"]}>
        <div className={styles["input-box"]}>
          {/* 첫번째 image box */}
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
            <div className={styles["input-image-box"]}>
              <label className={styles["input-image-done"]}>
                <img src={Img1} className={styles["inputed-image"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange1}
                />
              </label>
            </div>
          )}
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
            <div className={styles["input-image-box"]}>
              <label className={styles["input-image-done"]}>
                <img src={Img2} className={styles["inputed-image"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange2}
                />
              </label>
            </div>
          )}
        </div>
        {/* {onTextEditor === false ? "" : <TextEditor></TextEditor>} */}
      </div>
    </>
  );
};
export default StoryTemplate1;
