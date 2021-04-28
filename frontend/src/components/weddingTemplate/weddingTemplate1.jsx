import React from 'react';
import { useState } from "react"
import TextEditor from './textEditor';
import styles from "./weddingTemplate1.module.css"

const WeddingTemplate1 = () => {
  const [Img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  const [onTextEditor, setOnTextEditor] = useState(false);

  const onImageChange = function (e) {
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  const onTextInput = function () {
    setOnTextEditor(!onTextEditor);
  }
  return (
    <>
    <div className={styles.image_box}>
        <img src={Img}/>
        <label className={styles.image_button}>
          <div className={styles.image_icon}>
            <i className="fas fa-camera"></i>
              <input
                type="file"
                className={styles.image_input}
                onChange={onImageChange}
              />
          </div>
        </label>
      <div className={styles.text_box}>
        <button
          className={styles.text_button}
          onClick={onTextInput}
        >
          <div className={styles.text_icon}>
            <i className="fas fa-pencil-alt"></i>
          </div>
        </button>
      </div>
      { onTextEditor === false
      ?
      ''
      :
      <TextEditor></TextEditor>
      }
    </div>
    </>
  );
}
export default WeddingTemplate1;