import api from "../../../service/api";
import React, { useState } from "react";
import styles from "./weddingTemplate2.module.css";
import SearchPlace from "../kakaoMap/searchPlace";
import KakaoMap from "../kakaoMap/kakaoMap";

const WeddingTemplate2 = ({
  weddingText1, setWeddingText1,
  weddingText2, setWeddingText2,
  weddingDate, setWeddingDate,
  weddingTime, setWeddingTime,
  weddingPlace, setWeddingPlace,
  weddingMapPlace, setWeddingMapPlace,
  weddingMapX, setWeddingMapX,
  weddingMapY, setWeddingMapY
}) => {
  const [mouseCheck1, setMouseCheck1] = useState(false);
  const [mouseCheck2, setMouseCheck2] = useState(false);
  const [mouseCheck3, setMouseCheck3] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [mapInfo, setMapInfo] = useState({});
  const [mapExist, setMapExist] = useState(false);
  const [searchExist, setSearchExist] = useState(0);
  
  
  // const sendWedding2 = () => {
  //   let data = new FormData();
  //   data.append("cardId", 2)
  //   data.append("cardImg", null)
  //   data.append("cardDate", date)
  //   data.append("cardFirstComment", null)
  //   data.append("cardSecondComment", null)
  //   data.append("cardTime", time)
  //   data.append("cardPlace", place)
  //   data.append("placeName", mapPlace)
  //   data.append("x", mapX)
  //   data.append("y", mapY)
  //   data.append("cardManPhone", null)
  //   data.append("cardManAccountNumber", null)
  //   data.append("cardWomanPhone", null)
  //   data.append("cardWomanAccountNumber", null)
  //   api
  //   .put("/weddingcard", data, {
  //     headers: { Authorization: localStorage.getItem("jwt") },
  //   })
  //   .then((res) => {
  //     // wedding template 컴포넌트 끄는 bind함수?
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }
  
  const handleText1 = (e) => {
    const value = e.target.value;
    let totalByte = 0;
    let maxByte = 270;
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
    setWeddingText1(result);
  };

  const handleText2 = (e) => {
    const value = e.target.value;
    let totalByte = 0;
    let maxByte = 200;
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
    setWeddingText2(result);
  };

  const mouseOn1 = () => {
    setMouseCheck1(!mouseCheck1);
  };

  const mouseOn2 = () => {
    setMouseCheck2(!mouseCheck2);
  };

  const mouseOn3 = () => {
    setMouseCheck3(!mouseCheck3);
  };

  const getMapInfo = (mapInfo) => {
    setMapOpen(false);
    setMapInfo(mapInfo);
    setWeddingMapPlace(mapInfo.name);
    setWeddingMapX(mapInfo.x);
    setWeddingMapY(mapInfo.y);
    setMapExist(true);
    setSearchExist(searchExist+1)
  };

  const openMapModal = () => {
    setMapOpen(true);
  };

  const closeMapModal = () => {
    setMapOpen(false);
  };

  const onDateChange = function (e) {
    setWeddingDate(e.target.value);
  };

  const onTimeChange = function (e) {
    setWeddingTime(e.target.value);
  };

  const onPlaceChange = function (e) {
    setWeddingPlace(e.target.value);
  };
  

  return (
    <div className={styles["template-box"]}>
      <div className={styles["input-area1"]}>
        <div className={styles["input-area1-area1"]}>
          <div className={styles["title-text"]}>INVITATION</div>
          <div className={styles["title-icon"]}>
            <i className="fas fa-heart"></i>
          </div>
        </div>
        <div>
          <div className={styles["input-area1-area2"]}>
            <div className={styles["text-box1"]}>
              <textarea
                className={styles.text1}
                id="wt2-text1-id"
                onChange={handleText1}
                value={weddingText1}
              />
              <label 
                className={styles["text-button"]}
                htmlFor="wt2-text1-id"
              >
                <i className="fas fa-pencil-alt"></i>
              </label>
            </div>
            {/* 날짜입력 */}
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
            {/* 시각입력 */}
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
            {/* 장소입력 */}
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
        </div>
      </div>
      <div className={styles["input-area2"]}>
        <div className={styles["input-area2-area1"]}>
          <div className={styles["title-text"]}>LOCATION</div>
          <div className={styles["title-icon"]}>
            <i className="fas fa-heart"></i>
          </div>
          {searchExist  === 0 ?
            <div className={styles["map-box"]}>
              <button className={styles["text-button"]} onClick={openMapModal}>
                <div className={styles["map-icon"]}>
                  <i className="fas fa-map-marked-alt"></i>
                </div>
              </button>
            </div>
            : 
            <>
              <div className={styles["map-serached"]}>
                <KakaoMap mapInfo={mapInfo} mapExist={mapExist} searchExist={searchExist}></KakaoMap>
                <button
                  className={styles['text-button']}
                  onClick={openMapModal}
                >
                  <div className={styles['map-icon']}>
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                </button>
              </div>
            </>
          }
        </div>
        <div className={styles["input-area2-area1"]}>
          <div className={styles["title-text"]}>ACCESS</div>
          <div className={styles["title-icon"]}>
            <i className="fas fa-heart"></i>
          </div>
          <div className={styles["text-box2"]}>
            <textarea
              className={styles.text2}
              id="wt2-text2-id"
              onChange={handleText2}
              value={weddingText2}
            />
            <label 
              className={styles["text-button"]}
              htmlFor="wt2-text2-id"  
            >
              <i className="fas fa-pencil-alt"></i>
            </label>
          </div>
        </div>
      </div>
      {mapOpen === false ? 
        ""
        : 
        <div className={styles["map-component"]}>
          <SearchPlace
            mapInfo = {mapInfo}
            open = { mapOpen }
            mapExist={mapExist}
            searchExist={searchExist}
            close = { closeMapModal }
            getMapInfo = {getMapInfo}
          ></SearchPlace>
        </div>
      }
    </div>
  );
};

export default WeddingTemplate2;
