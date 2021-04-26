import React from 'react';
import Intro from '../components/intro/intro';
import StepProgressBar from '../components/stepProgressBar/stepProgressBar';

const Jiyoung = () => {
  
  
  return (
    <div>
      지영페이지
      <i className="fas fa-air-freshener"></i>
      <StepProgressBar onClickHandler={() => {
        console.log('hi');
      }}/>
      <Intro />
    </div>
  );
}

export default Jiyoung;