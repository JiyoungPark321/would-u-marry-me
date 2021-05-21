import React from 'react';
import styles from './intro.module.css';

const Intro = () => {
  return (
    <div className={styles.intro}>
      {/* 사이트 설명 및 영상 */}
      <img 
        src="/images/intro-slow.gif" 
        alt="" 
        className={styles['intro-gif-file']}
      />
    </div>
  );
};

export default Intro;