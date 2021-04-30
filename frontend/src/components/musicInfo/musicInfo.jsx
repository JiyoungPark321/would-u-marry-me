import React, { useState } from 'react';
import styles from './musicInfo.module.css';

const MusicInfo = ({ color }) => {
  const [musicState, setMusicState ] = useState(true);

  const isMusicState = () => {
    setMusicState(!musicState);
  };

  return (
    <div className={`${styles['music-info']} ${color === "white" && styles['color-white']}`}>
      <div className={styles['album-container']}>
        <img src="https://picsum.photos/80/80" />
      </div>
      <div className={styles['info-container']}>
        <p>밝게 빛나는 별이 되어 비춰줄게</p>
        <p>송이한</p>
      </div>
      <button
        className={`${styles['volume-controller-button']} ${color === "white" && styles['color-white']}`}
        onClick={isMusicState}
      > 
        <div className={!musicState && styles['volume-on-icon']}>
          <i className="fas fa-volume-up"></i>
        </div>
        <div className={musicState && styles['volume-off-icon']}>
          <i className="fas fa-volume-mute"></i>
        </div>
      </button>
    </div>
  );
};

export default MusicInfo;