import React, { useState } from 'react';
import styles from './spotsNotice.module.css';

const SpotsNotice = ({ setModalState, modalState, setSelectedStoryNumber, storyNumber }) => {

  const clickHandler = () => {
    setModalState(!modalState);
    setSelectedStoryNumber(storyNumber);
  };

  return (
    <div className={styles['spots-notice']}>
      <p
        className={styles['notice-mention']}
      >입장하시겠습니까?</p>
      <button
        className={styles['entry-button']}
        onClick={clickHandler}
      >
        Click!
      </button>
    </div>
  );
};

export default SpotsNotice;