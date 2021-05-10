import React, { useState } from 'react';
import styles from './stepProgressBar.module.css';


const StepProgressBar = ({ currentStep, saveCheck }) => {

  const moveStep = () => {
    
    // props 로 내려받은 함수 실행
  
  };

  return (
    <div className={styles['step-progress-bar']}>
      <button 
        className={`${styles['step-circle']} ${currentStep === 0 && styles['current-step']} ${saveCheck[0] && styles['save-step']}`}
      >1</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 1 && styles['current-step']} ${saveCheck[1] && styles['save-step']}`}
      >2</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 2 && styles['current-step']} ${saveCheck[2] && styles['save-step']}`}
      >3</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 3 && styles['current-step']} ${saveCheck[3] && styles['save-step']}`}
      >4</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 4 && styles['current-step']} ${saveCheck[4] && styles['save-step']}`}
      >5</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 5 && styles['current-step']} ${saveCheck[5] && styles['save-step']}`}
      >6</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 6 && styles['current-step']} ${saveCheck[6] && styles['save-step']}`}
      >7</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 7 && styles['current-step']} ${saveCheck[7] && styles['save-step']}`}
      >8</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 8  && styles['current-step']} ${saveCheck[8] && styles['save-step']}`}
      >9</button>
    </div>
  );
};

export default StepProgressBar;