import React, { useState } from 'react';
import styles from './stepProgressBar.module.css';


const StepProgressBar = ({ currentStep, setCurrentStep, saveCheck }) => {

  const moveStep = (selectedStep) => {
    if (saveCheck[selectedStep]) {
      setCurrentStep(selectedStep);
    }
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
        className={`${styles['step-circle']} ${currentStep === 3 && styles['current-step']} ${saveCheck[3] && styles['save-step']}`}
        onClick={() => {moveStep(3)}}
      >4</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 4 && styles['current-step']} ${saveCheck[4] && styles['save-step']}`}
        onClick={() => {moveStep(6)}}
      >5</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 5 && styles['current-step']} ${saveCheck[5] && styles['save-step']}`}
        onClick={() => {moveStep(9)}}
      >6</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 6 && styles['current-step']} ${saveCheck[6] && styles['save-step']}`}
        onClick={() => {moveStep(12)}}
      >7</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 7 && styles['current-step']} ${saveCheck[7] && styles['save-step']}`}
        onClick={() => {moveStep(15)}}
      >8</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${currentStep === 8  && styles['current-step']} ${saveCheck[8] && styles['save-step']}`}
        onClick={() => {moveStep(18)}}
      >9</button>
    </div>
  );
};

export default StepProgressBar;