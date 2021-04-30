import React from 'react';
import styles from './prevNextButton.module.css';

export const PrevNextButton = ({ color }) => {
  return (
    <div className={`${styles['prev-next-button']} ${color === "white" && styles.colorWhite}`}>
      <i className="fas fa-arrow-circle-left"></i>
      <i className="fas fa-arrow-circle-right"></i>
    </div>
  );
};

export const NextButton = ({ color }) => {
  return (
    <div className={`${styles['next-button']} ${color === "white" && styles.colorWhite}`}>
      <i className="fas fa-arrow-circle-right"></i>
    </div>
  );
};

export const PrevButton = ({ color }) => {
  return (
    <div className={`${styles['prev-button']} ${color === "white" && styles.colorWhite}`}>
      <i className="fas fa-arrow-circle-left"></i>
    </div>
  )
}