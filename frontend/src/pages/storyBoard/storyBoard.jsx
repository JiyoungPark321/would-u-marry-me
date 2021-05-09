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
  const [backgroundUrl, setBackgroundUrl] = useState('');

  const { id } = useParams();
  

  useEffect(() => {
    api.get(`/storyboard/${id}`,
    {
      headers: {Authorization: localStorage.getItem("jwt")},
    })
      .then((res) => {
        const newSaveCheck = [...saveCheck];
        if (res.data.data.weddingCard == null) {
          setCurrentStep(8);
        } else {
          newSaveCheck[8] = true;
        }
        res.data.data.stories.reverse().forEach(story => {
          setCurrentStep(story.index);
          // index 0부터 온다고 가정하고 했음.
          newSaveCheck[story.index + 3] = true;
        })
        if (res.data.data.character == null) {
          setCurrentStep(2);
        } else {
          newSaveCheck[2] = true;
        }
        if (res.data.data.music == null) {
          setCurrentStep(1);
        } else {
          newSaveCheck[2] = true;
        }
        if (res.data.data.background == null) {
          setCurrentStep(0);
        } else {
          newSaveCheck[0] = true;
        }


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
    <div 
      style={{ backgroundImage: `url(${backgroundUrl})` }} 
      className={styles['story-board-container']}
    >
      <StepProgressBar 
        currentStep={currentStep}
        
      />
      <MoveMyStoryBoardButton />
      {
        (() => {
          if (currentStep === 0) return <CarouselType1 setBackgroundUrl={setBackgroundUrl} />
          else if (currentStep === 1) return <CarouselType2 />
          else if (currentStep === 2) return <CarouselType3 />
          else if (currentStep === 3) return <CarouselType4 />
          else if (currentStep === 4) return <CarouselType5 />
          
        })()
      }
    
      <NextButton 
        moveNextStep={moveNextStep}
      />
    </div>
  );
};

export default StoryBoard;