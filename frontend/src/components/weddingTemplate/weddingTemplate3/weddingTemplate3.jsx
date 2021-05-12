import React, { useState } from "react";
import styles from "./weddingTemplate3.module.css";
import SearchPlace from "../kakaoMap/searchPlace";
import KakaoMap from "../kakaoMap/kakaoMap";

const WeddingTemplate3 = () => {
  const [img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  const [imgInput1, setImgInput1] = useState(false);
  const [mouseCheck1, setMouseCheck1] = useState(false);
  const [mouseCheck2, setMouseCheck2] = useState(false);
  const [mouseCheck3, setMouseCheck3] = useState(false);
  const [imageHoverCheck, setImageHoverCheck] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [mapInfo, setMapInfo] = useState({});
  const [mapExist, setMapExist] = useState(false);
  var date = "";
  var time = "";
  var place = "";

  const mouseOn1 = () => {
    setMouseCheck1(!mouseCheck1);
  };
  const mouseOn2 = () => {
    setMouseCheck2(!mouseCheck2);
  };
  const mouseOn3 = () => {
    setMouseCheck3(!mouseCheck3);
  };
  const imageMouseOn = () => {
    setImageHoverCheck(true);
  };
  const imageMouseOut = () => {
    setImageHoverCheck(false);
  };
  const getMapInfo = (mapInfo) => {
    setMapOpen(false);
    setMapInfo(mapInfo);
    setMapExist(!mapExist);
  };
  const openMapModal = () => {
    setMapOpen(true);
  };
  const closeMapModal = () => {
    setMapOpen(false);
  };
  const onImageChange = function (e) {
    setImgFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
    if (!imgInput1) {
      setImgInput1(!imgInput1);
    }
  };
  const onDateChange = function (e) {
    console.log(e.target.value);
    date = e.target.value;
    console.log(date);
  };
  const onTimeChange = function (e) {
    console.log(e.target.value);
    time = e.target.value;
    console.log(time);
  };
  const onPlaceChange = function (e) {
    console.log(e.target.value);
    place = e.target.value;
    console.log(place);
  };

  return (
    <div className={styles["template-box"]}>
      <div className={styles["input-area1"]}>
        <div className={styles["text-box1"]}>
          <button className={styles["text-button1"]}>
            <div className={styles["text-icon1"]}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>
        {/* 사진 입력 */}
        {imgInput1 === false ? (
          <div className={styles["image-box"]}>
            <img src={img} />
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
            onMouseEnter={imageMouseOn}
            onMouseLeave={imageMouseOut}
          >
            {imageHoverCheck === false ? (
              <label className={styles["input-image-done"]}>
                <img src={img} className={styles["inputed-image"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange}
                />
              </label>
            ) : (
              <label className={styles["input-image-done"]}>
                <img src={img} className={styles["inputed-image-on"]} />
                <input
                  type="file"
                  className={styles["image-input"]}
                  onChange={onImageChange}
                />
                <div
                  className={styles["image-icon-done"]}
                  onMouseEnter={imageMouseOn}
                >
                  <i className="fas fa-camera"></i>
                </div>
              </label>
            )}
          </div>
        )}
        {/* 날짜 입력 */}
        <div
          className={styles["date-button"]}
          onMouseOver={mouseOn1}
          onMouseOut={mouseOn1}
        >
          {mouseCheck1 === false ? (
            <div className={styles["date-input-box"]}>
              <input
                className={styles["date-input"]}
                type="date"
                onChange={onDateChange}
              />
            </div>
          ) : (
            <div className={styles["date-input-box-on"]}>
              <input
                className={styles["date-input-on"]}
                type="date"
                onChange={onDateChange}
              />
            </div>
          )}
        </div>
        {/* 시각 입력 */}
        <div
          className={styles["date-button"]}
          onMouseOver={mouseOn2}
          onMouseOut={mouseOn2}
        >
          {mouseCheck2 === false ? (
            <div className={styles["date-input-box"]}>
              <input
                className={styles["date-input2"]}
                type="time"
                onChange={onTimeChange}
              />
            </div>
          ) : (
            <div className={styles["date-input-box-on"]}>
              <input
                className={styles["date-input2-on"]}
                type="time"
                onChange={onTimeChange}
              />
            </div>
          )}
        </div>
        {/* 장소 입력 */}
        <div
          className={styles["date-button"]}
          onMouseOver={mouseOn3}
          onMouseOut={mouseOn3}
        >
          {mouseCheck3 === false ? (
            <div className={styles["date-input-box"]}>
              <input
                className={styles["date-input3"]}
                type="text"
                placeholder="Place"
                onChange={onPlaceChange}
              />
            </div>
          ) : (
            <div className={styles["date-input-box-on"]}>
              <input
                className={styles["date-input3-on"]}
                type="text"
                placeholder="Place"
                onChange={onPlaceChange}
              />
            </div>
          )}
        </div>
      </div>
      <div className={styles["input-area2"]}>
        <div className={styles["text-box2"]}>
          <button className={styles["text-button2"]}>
            <div className={styles["text-icon2"]}>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </button>
        </div>
        <div className={styles["info-man"]}>
          <div className={styles["info-man-title"]}>신랑</div>
          <div className={styles["info-man-text-area"]}>
            <input
              type="text"
              className={styles["info-man-text"]}
              placeholder="PhoneNumber"
            />
            <input
              type="text"
              className={styles["info-man-text"]}
              placeholder="AccountNumber"
            />
          </div>
        </div>
        <div className={styles["info-woman"]}>
          <div className={styles["info-woman-title"]}>신부</div>
          <div className={styles["info-woman-text-area"]}>
            <input
              type="text"
              className={styles["info-woman-text"]}
              placeholder="PhoneNumber"
            />
            <input
              type="text"
              className={styles["info-woman-text"]}
              placeholder="AccountNumber"
            />
          </div>
        </div>
        {mapExist === false ? (
          <div className={styles["map-box"]}>
            <button className={styles["text-button2"]} onClick={openMapModal}>
              <div className={styles["map-icon"]}>
                <i className="fas fa-map-marked-alt"></i>
              </div>
            </button>
          </div>
        ) : (
          <>
            <div className={styles["map-serached"]}>
              <KakaoMap mapInfo={mapInfo} mapExist={mapExist}></KakaoMap>
            </div>
          </>
        )}
      </div>
      {mapOpen === false ? (
        ""
      ) : (
        <div className={styles["map-component"]}>
          <SearchPlace
            open={mapOpen}
            close={closeMapModal}
            getMapInfo={getMapInfo}
          ></SearchPlace>
        </div>
      )}
    </div>
  );
};

export default WeddingTemplate3;
