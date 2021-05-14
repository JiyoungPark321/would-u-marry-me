import React, { useState } from "react";
import styles from "./weddingTemplate2.module.css";
import SearchPlace from "../kakaoMap/searchPlace";
import KakaoMap from "../kakaoMap/kakaoMap";

const WeddingTemplate2 = () => {
  const [mapOpen, setMapOpen] = useState(false);
  const [mapInfo, setMapInfo] = useState({});
  const [mapExist, setMapExist] = useState(false);
  const [searchExist, setSearchExist] = useState(0);
  const [mouseCheck1, setMouseCheck1] = useState(false);
  const [mouseCheck2, setMouseCheck2] = useState(false);
  const [mouseCheck3, setMouseCheck3] = useState(false);
  var date = "";
  var time = "";
  var place = "";

  console.log(searchExist)
  console.log('mapExist='+mapExist)
  console.log('open='+mapOpen)

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
        <div className={styles["input-area1-area1"]}>
          <div className={styles["title-text"]}>INVITATION</div>
          <div className={styles["title-icon"]}>
            <i className="fas fa-heart"></i>
          </div>
        </div>
        <div>
          <div className={styles["input-area1-area2"]}>
            <div className={styles["text-box1"]}>
              <button className={styles["text-button"]}>
                <div className={styles["text-icon"]}>
                  <i className="fas fa-pencil-alt"></i>
                </div>
              </button>
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
            <button className={styles["text-button"]}>
              <div className={styles["text-icon"]}>
                <i className="fas fa-pencil-alt"></i>
              </div>
            </button>
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
