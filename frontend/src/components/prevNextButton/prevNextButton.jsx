import React from 'react';
import styles from './prevNextButton.module.css';


export const NextButton = ({ color, moveNextStep }) => {

  return (
    <button 
      className={`${styles['next-button']} ${color === "white" && styles['color-white']}`}
      onClick={() => {moveNextStep()}}
    >
      <i className="fas fa-arrow-circle-right"></i>
    </button>
  );
};



export const PrevButton = ({ color, movePrevStep }) => {

  return (
    <button 
      className={`${styles['prev-button']} ${color === "white" && styles.colorWhite}`}
      onClick={() => {movePrevStep()}}
    >
      <i className="fas fa-arrow-circle-left"></i>
    </button>
  )
}