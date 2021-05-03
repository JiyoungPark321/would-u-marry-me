import React, { useState } from 'react';
import KakaoMap from "./kakaoMap";
import styles from './searchPlace.module.css'
const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

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
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          className={styles['textarea']}
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button type="submit" className={styles['search-button']}>
          <div className={styles['search-icon']}>
            <i className="fas fa-search" ></i>
          </div>
        </button>
      </form>
      <KakaoMap searchPlace={place} />
    </>
  );
};

export default SearchPlace;