import React, { useState } from 'react';
import styles from './stepProgressBar.module.css';

type StepProgressBarProps = {
  onClickHandler: () => void;
};

const StepProgressBar = ({onClickHandler}: StepProgressBarProps) => {
  const [stepNumber, setStepNumber] = useState(1);

  const moveStep = (newStepNumber: number) => {
    setStepNumber(newStepNumber);
    // props 로 내려받은 함수 실행
    onClickHandler();
  };

  return (
    <div className={styles['step-progress-bar']}>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 1 && styles.active}`}
        onClick={() => {moveStep(1)}}
      >
        1
      </button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 2 && styles.active}`}
        onClick={() => {moveStep(2)}}
      >2</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 3 && styles.active}`}
        onClick={() => {moveStep(3)}}
      >3</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 4 && styles.active}`}
        onClick={() => {moveStep(4)}}
      >4</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 5 && styles.active}`}
        onClick={() => {moveStep(5)}}
      >5</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 6 && styles.active}`}
        onClick={() => {moveStep(6)}}
      >6</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 7 && styles.active}`}
        onClick={() => {moveStep(7)}}
      >7</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 8 && styles.active}`}
        onClick={() => {moveStep(8)}}
      >8</button>
      <div className={styles['step-line']}></div>
      <button 
        className={`${styles['step-circle']} ${stepNumber === 9 && styles.active}`}
        onClick={() => {moveStep(9)}}
      >9</button>
    </div>
  );
};

export default StepProgressBar;