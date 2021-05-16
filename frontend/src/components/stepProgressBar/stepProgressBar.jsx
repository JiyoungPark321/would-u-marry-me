import React, { useState } from 'react';
import styles from './stepProgressBar.module.css';


const StepProgressBar = ({ currentStep, setCurrentStep, saveCheck }) => {

  const moveStep = (selectedStep) => {
    // if (saveCheck[selectedStep]) {
      setCurrentStep(selectedStep);
    // }
  };

  return (
    <div className={styles['step-progress-bar']}>
      <button 
        className={`${styles['step-circle']} ${currentStep === 0 && styles['current-step']} ${saveCheck[0] && styles['save-step']}`}
        onClick={() => {moveStep(0)}}
      >1</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 1 && styles['current-step']} ${saveCheck[1] && styles['save-step']}`}
        onClick={() => {moveStep(1)}}
      >2</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 2 && styles['current-step']} ${saveCheck[2] && styles['save-step']}`}
        onClick={() => {moveStep(2)}}
      >3</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${(currentStep === 3 || currentStep === 4 || currentStep === 5) && styles['current-step']} ${(saveCheck[3] && saveCheck[4] && saveCheck[5]) && styles['save-step']}`}
        onClick={() => {moveStep(3)}}
      >4</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${(currentStep === 6 || currentStep === 7 || currentStep === 8) && styles['current-step']} ${(saveCheck[6] && saveCheck[7] && saveCheck[8]) && styles['save-step']}`}
        onClick={() => {moveStep(6)}}
      >5</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${(currentStep === 9 || currentStep === 10 || currentStep === 11) && styles['current-step']} ${(saveCheck[9] && saveCheck[10] && saveCheck[11]) && styles['save-step']}`}
        onClick={() => {moveStep(9)}}
      >6</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${(currentStep === 12 || currentStep === 13 || currentStep === 14) && styles['current-step']} ${(saveCheck[12] && saveCheck[13] && saveCheck[14]) && styles['save-step']}`}
        onClick={() => {moveStep(12)}}
      >7</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${(currentStep === 15 || currentStep === 16 || currentStep === 17) && styles['current-step']} ${(saveCheck[15] && saveCheck[16] && saveCheck[17]) && styles['save-step']}`}
        onClick={() => {moveStep(15)}}
      >8</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${(currentStep === 18 || currentStep === 19 || currentStep === 20)  && styles['current-step']} ${(saveCheck[18] && saveCheck[19] && saveCheck[20]) && styles['save-step']}`}
        onClick={() => {moveStep(18)}}
      >9</button>
    </div>
  );
};

export default StepProgressBar;