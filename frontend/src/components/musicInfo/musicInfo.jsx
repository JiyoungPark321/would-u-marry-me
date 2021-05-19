import React, { useState, useRef } from 'react';
import styles from './musicInfo.module.css';

const MusicInfo = ({ color, musicData }) => {

  const [musicState, setMusicState ] = useState(true);

  const audio = useRef(null);

  const isMusicState = () => {
    if (!musicState) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    setMusicState(!musicState);
  };

  return (
    <div className={`${styles['music-info']} ${color === "white" && styles['color-white']}`}>
      <div className={styles['album-container']}>
        <img 
          src={musicData.musicImgUrl}
          className={styles['album-image']}
        />
      </div>
      <div className={styles['info-container']}>
        <p>{musicData.title}</p>
        <p>{musicData.artist}</p>
      </div>
      <audio ref={audio} src={musicData.musicUrl} autoPlay></audio>
      <button
        className={`${styles['volume-controller-button']} ${color === "white" && styles['color-white']}`}
        onClick={isMusicState}
      > 
        <div className={`${!musicState && styles['volume-on-icon']}`}>
          <i className="fas fa-volume-up"></i>
        </div>
        <div className={`${musicState && styles['volume-off-icon']}`}>
          <i className="fas fa-volume-mute"></i>
        </div>
      </button>
    </div>
  );
};

export default MusicInfo;