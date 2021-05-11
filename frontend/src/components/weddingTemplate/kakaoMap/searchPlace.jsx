import React, { useState } from 'react';
import KakaoMap from "./kakaoMap";
import styles from './searchPlace.module.css'

const SearchPlace = (props) => {
  const { open, close } = props; // 장소 input 컴포넌트 팝업
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");
  // const [infoY, setInfoY] = useState("");
  // const [infoX, setInfoX] = useState("");
  // const [infoPlace, setInfoPlace] = useState("");
  const [mapInfo, setMapInfo] = useState({});

  const clickCheck = () => {
    console.log(Object.keys(mapInfo).length)
    if(Object.keys(mapInfo).length === 0) {
      alert("장소를 선택해주세요.")
    }
    else {
      props.getMapInfo(mapInfo)
    }
  }
  const getSearchInfo = (info) => {
    setMapInfo(info)
  }
  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      { open? (
        <>
        <div className={styles['map-component']}>
          <div className={styles['button-area']}>            
            <form className="inputForm" onSubmit={handleSubmit}>
              <input
                className={styles['text-area']}
                placeholder="Search Place"
                onChange={onChange}
                value={inputText}
              />
            </form>
              <button
                type="submit"
                className={styles['button']}
                onClick={handleSubmit}
              >
                <div className={styles['icon']}>
                  <i className="fas fa-search" ></i>
                </div>
              </button>
              <button
                type="submit"
                className={styles['button']}
                onClick={clickCheck}
              >
                <div className={styles['icon']}>
                <i className="fas fa-check"></i>
                </div>
              </button>
              <button
                type="submit"
                className={styles['button']}
                onClick={close}
              >
                <div className={styles['icon']}>
                <i className="fas fa-times"></i>
                </div>
              </button>
          </div>
          <div className={styles['map-area']}>
            <KakaoMap
              searchPlace={place} 
              getSearchInfo={getSearchInfo}
            />
          </div>
        </div>
        </>
      ):null}
    </>
  );
};

export default SearchPlace;