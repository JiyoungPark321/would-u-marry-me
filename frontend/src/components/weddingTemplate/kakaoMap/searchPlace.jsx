import React, { useState } from 'react';
import KakaoMap from "./kakaoMap";
import styles from './searchPlace.module.css'

const SearchPlace = (props) => {
  const { open, close, mapExist } = props; // 장소 input 컴포넌트 팝업
  const {searchExist} = props
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");
  const [mapInfo, setMapInfo] = useState({});

  const clickCheck = () => {
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
                <div className={`${styles['icon']} ${styles.search}`}>
                  <i className="fas fa-search" ></i>
                </div>
              </button>
              <button
                type="submit"
                className={styles['button']}
                onClick={clickCheck}
              >
                <div className={`${styles['icon']} ${styles.check}`}>
                <i className="fas fa-check"></i>
                </div>
              </button>
              <button
                type="submit"
                className={styles['button']}
                onClick={close}
              >
                <div className={`${styles['icon']} ${styles.cancel}`}>
                  <i className="fas fa-times"></i>
                </div>
              </button>
          </div>
          <div className={styles['map-area']}>
            <KakaoMap
              searchExist={searchExist}
              mapInfo={mapInfo}
              open={open}
              mapExist={mapExist}  
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