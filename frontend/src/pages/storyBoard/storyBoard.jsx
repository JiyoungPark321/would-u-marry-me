import React, { useEffect, useState } from 'react';
import styles from './storyBoard.module.css';

import StepProgressBar from '../../components/stepProgressBar/stepProgressBar';
import MoveMyStoryBoardButton from '../../components/moveMyStoryBoardButton/moveMyStoryBoardButton';
import { NextButton } from '../../components/prevNextButton/prevNextButton';

import CarouselType1 from '../../components/carousels/carouselType1/carouselType1';
import CarouselType2 from '../../components/carousels/carouselType2/carouselType2';
import CarouselType3 from '../../components/carousels/carouselType3/carouselType3';
import CarouselType4 from '../../components/carousels/carouselType4/carouselType4';
import CarouselType5 from '../../components/carousels/carouselType5/carouselType5';
import api from '../../service/api';
import { useParams } from 'react-router';



const StoryBoard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [saveCheck, setSaveCheck] = useState([false, false, false, false, false, false, false, false, false]);
  const { id } = useParams();

  useEffect(() => {
    api.get('/storyboard/detailStoryboard',
    {
      headers: {Authorization: localStorage.getItem("jwt")},
      params: {storyboardId: id}
    })
      .then((res) => {
        console.log(res.data.data);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);


  const moveNextStep = () => {
    currentStep < 9 
    ? setCurrentStep(currentStep + 1)
    : setCurrentStep(0);
    console.log(currentStep);
    // const newSaveCheck = [...saveCheck];
    // newSaveCheck[currentStep] = true;
  };
  


  return (
    <>
      <StepProgressBar 
        currentStep={currentStep}
        
      />
      <MoveMyStoryBoardButton />
      {
        (() => {
          if (currentStep === 0) return <CarouselType1 />
          if (currentStep === 1) return <CarouselType2 />
          if (currentStep === 2) return <CarouselType3 />
          if (currentStep === 3) return <CarouselType4 />
          if (currentStep === 4) return <CarouselType5 />
          
        })()
      }
    
      <NextButton 
        moveNextStep={moveNextStep}
      />
    </>
  );
};

export default StoryBoard;