import React, { useState } from 'react';
import styles from './spotsNotice.module.css';

const SpotsNotice = ({ setModalState, modalState }) => {

  return (
    <div className={styles['spots-notice']}>
      <p
        className={styles['notice-mention']}
      >입장하시겠습니까?</p>
      <button
        className={styles['entry-button']}
        onClick={() => {setModalState(!modalState)}}
      >
        Click!
      </button>
    </div>
  );
};

export default SpotsNotice;