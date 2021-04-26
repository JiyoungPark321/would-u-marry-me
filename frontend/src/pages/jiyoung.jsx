import React from 'react';
import StepProgressBar from '../components/stepProgressBar/stepProgressBar';

const Jiyoung = () => {
  
  
  return (
    <div>
      지영페이지
      <i className="fas fa-air-freshener"></i>
      <StepProgressBar onClickHandler={() => {
        console.log('hi');
      }}/>
    </div>
  );
}

export default Jiyoung;