import React, { useEffect, useState } from 'react';
import styles from './storyBoard.module.css';

import api from '../../service/api';
import { useParams } from 'react-router';

import StepProgressBar from '../../components/stepProgressBar/stepProgressBar';
import MoveMyStoryBoardButton from '../../components/moveMyStoryBoardButton/moveMyStoryBoardButton';
import { NextButton, PrevButton } from '../../components/prevNextButton/prevNextButton';

import CarouselType1 from '../../components/carousels/carouselType1/carouselType1';
import CarouselType2 from '../../components/carousels/carouselType2/carouselType2';
import CarouselType3 from '../../components/carousels/carouselType3/carouselType3';
import CarouselType4 from '../../components/carousels/carouselType4/carouselType4';
import CarouselType5 from '../../components/carousels/carouselType5/carouselType5';

import StoryTemplate1 from '../../components/storyTemplate/storyTemplate1/storyTemplate1';
import StoryTemplate2 from '../../components/storyTemplate/storyTemplate2/storyTemplate2';
import StoryTemplate3 from '../../components/storyTemplate/storyTemplate3/storyTemplate3';
import StoryTemplate4 from '../../components/storyTemplate/storyTemplate4/storyTemplate4';
import StoryTemplate5 from '../../components/storyTemplate/storyTemplate5/storyTemplate5';



const StoryBoard = () => {
  const { id } = useParams();

  const [currentStep, setCurrentStep] = useState(0);
  const [saveCheck, setSaveCheck] = useState([
    false, false, false, false, false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false, false, false, false
  ]);

  const [storyBoardData, setStoryBoardData] = useState([]);

  const [backgroundUrl, setBackgroundUrl] = useState('');

  const [backgroundId, setBackgroundId] = useState(null);
  const [musicId, setMusicId] = useState(null);
  const [characterId, setCharacterId] = useState(null);
  
  const [spotId, setSpotId] = useState(null);
  const [storyId, setStoryId] = useState(null);
  const [storyTemplateId, setStoryTemplateId] = useState(null);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [text1, setText1] = useState(null);
  const [text2, setText2] = useState(null);
  


  useEffect(() => {
    api.get(`/storyboard/${id}`,
    {
      headers: {Authorization: localStorage.getItem("jwt")},
    })
      .then((res) => {
        console.log(res);
        setStoryBoardData(res.data.data);
        const newSaveCheck = [...saveCheck];
        if (res.data.data.weddingCard == null) {
          setCurrentStep(8);
        } else {
          newSaveCheck[8] = true;
        }
        if (res.data.data.stories) {
          setCurrentStep(res.data.data.stories.length * 3 + 3);
        }
        res.data.data.stories.forEach(story => {
          newSaveCheck[story.index * 3 + 0] = true;
          newSaveCheck[story.index * 3 + 1] = true;
          if (story.comments.length === 0 && story.images.length === 0) {
            newSaveCheck[story.index * 3 + 2] = false;
          } else {
            newSaveCheck[story.index * 3 + 2] = true;
          }
            
        })
        if (res.data.data.character == null) {
          setCurrentStep(2);
        } else {
          newSaveCheck[2] = true;
        }
        if (res.data.data.music == null) {
          setCurrentStep(1);
        } else {
          newSaveCheck[1] = true;
        }
        if (res.data.data.background == null) {
          setCurrentStep(0);
        } else {
          setBackgroundUrl(res.data.data.background.backgroundImgUrl)
          newSaveCheck[0] = true;
        }
        setSaveCheck(newSaveCheck);
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  const _moveNextStep = () => {
    const newSaveCheck = [...saveCheck];
    newSaveCheck[currentStep] = true;
    currentStep < 21 
    ? setCurrentStep(currentStep + 1)
    : setCurrentStep(0);
  }

  const moveNextStep = () => {
    if (currentStep === 0 && backgroundId !== null) {
      api.put('/background', {
        backgroundId,
        storyBoardId: id
      }, {
        headers: {Authorization: localStorage.getItem("jwt")}
      })
        .then((res) => {
          _moveNextStep();
        })
        .catch((err) => {
          console.error(err);
        })
    } else if (currentStep === 1 && musicId !== null) {
      api.put('/music', {
        musicId,
        storyBoardId: id
      }, {
        headers: {Authorization: localStorage.getItem("jwt")}
      })
        .then((res) => {
          _moveNextStep();
        })
        .catch((err) => {
          console.error(err);
        })
    } else if (currentStep === 2 && characterId !== null) {
      api.put('/character', {
        characterId,
        storyBoardId: id
      }, {
        headers: {Authorization: localStorage.getItem("jwt")}
      })
        .then((res) => {
          _moveNextStep();
        })
        .catch((err) => {
          console.error(err);
        })
    } else if ((currentStep === 3 || currentStep === 6 || currentStep === 9 || currentStep === 12 || currentStep === 15 || currentStep === 18) && spotId !== null) {
      api.post('story', {
        index: parseInt(currentStep / 3),
        spotId,
        storyBoardId: id
      }, {
        headers: {Authorization: localStorage.getItem("jwt")}
      })
        .then((res) => {
          setStoryId(res.data.data.id);
          _moveNextStep();
        })
        .catch((err) => {
          console.error(err);
        })
    } else if ((currentStep === 4 || currentStep === 7 || currentStep === 10 || currentStep === 13 || currentStep === 16) && storyTemplateId !== null) {
      api.put('storytemplate', {
        storyId,
        storyTemplateId
      }, {
        headers: {Authorization: localStorage.getItem("jwt")}
      })
        .then((res) => {
          console.log(res);
          _moveNextStep();
        })
        .catch((err) => {
          console.error(err);
        })
      _moveNextStep();
    } else if (currentStep === 5) {
      if (storyTemplateId == 1) {

      } else if (storyTemplateId === 2) {

      } else if (storyTemplateId === 3 || storyTemplateId === 4 || storyTemplateId === 5) {
        const data = new FormData();
        data.append("storyId", storyId);
        data.append("image1", image1);
        data.append("image2", image2);
        data.append("image3", image3);
        data.append("text1", text1);

        api.put('story/third', data, {
          headers: {
            Authorization: localStorage.getItem("jwt"),
            "Content-Type": "multipart/form-data"
          }
        })
          .then((res) => {
            console.log(res);
            _moveNextStep();
          })
          .catch((err) => {
            console.error(err);
          })
        _moveNextStep();
      }
    }
    // _moveNextStep();
  };

  const movePrevStep = () => {
    currentStep > -1
    ? setCurrentStep(currentStep - 1)
    : setCurrentStep(0)
  }
  


  return (
    <div 
      style={{ backgroundImage: `url(${backgroundUrl})` }}  
        
      className={styles['story-board-container']}
    >
      <StepProgressBar 
        currentStep={
          2 < currentStep && currentStep < 6 ? 3
          : 5 < currentStep && currentStep < 9 ? 4
          : 8 < currentStep && currentStep < 12 ? 5
          : 11 < currentStep && currentStep < 15 ? 6
          : 14 < currentStep && currentStep < 18 ? 7
          : 17 < currentStep && currentStep < 21 ? 8
          : currentStep
        }
        setCurrentStep={setCurrentStep}
        saveCheck={[
          saveCheck[0], saveCheck[1], saveCheck[2], 
          saveCheck[3] && saveCheck[4] && saveCheck[5],
          saveCheck[6] && saveCheck[7] && saveCheck[8],
          saveCheck[9] && saveCheck[10] && saveCheck[11],
          saveCheck[12] && saveCheck[13] && saveCheck[14],
          saveCheck[15] && saveCheck[16] && saveCheck[17],
          saveCheck[18] && saveCheck[19] && saveCheck[20],
        ]}
      />
      <MoveMyStoryBoardButton />
      {
        (() => {
          if (currentStep === 0) {
            return (
              <CarouselType1 
                setBackgroundUrl={setBackgroundUrl} 
                setBackgroundId={setBackgroundId}
              />
            );   
          }
          else if (currentStep === 1) {
            return (
              <CarouselType2 
                setMusicId={setMusicId}
              />
            )
          }
          else if (currentStep === 2) {
            return (
              <CarouselType3 
                setCharacterId={setCharacterId}
              />
            )
          }
          else if (currentStep === 3 || currentStep === 6 || currentStep === 9 || currentStep === 12 || currentStep === 15 || currentStep ===18) {
            return (
              <CarouselType4 
                setSpotId={setSpotId}
              />
            )
          }
          else if (currentStep === 4 || currentStep === 7 || currentStep === 10 || currentStep === 13 || currentStep === 16 || currentStep === 19) {
            return (
              <CarouselType5
                setStoryTemplateId={setStoryTemplateId}
              />
            )
          }
          else if (currentStep === 5 || currentStep === 8 || currentStep === 11 || currentStep === 14 || currentStep === 17) {
            // if (template == 1) {
            
            // }
            if (storyTemplateId === 1) {
              return (
                <StoryTemplate1 
                  setImage1={setImage1}
                  setImage2={setImage2}
                  setText1={setText1}
                  setText2={setText2}
                />
              )
            } else if (storyTemplateId === 2) {
              return(
                <StoryTemplate2 
                  setImage1={setImage1}
                  setText1={setText1}
                />
              )
            } else if (storyTemplateId === 3) {
              return(
                <StoryTemplate3 
                  image1={image1}
                  setImage1={setImage1}
                  image2={image2}
                  setImage2={setImage2}
                  image3={image3}
                  setImage3={setImage3}
                  text1={text1}
                  setText1={setText1}
                />
              )
            } else if (storyTemplateId === 4) {
              return(
                <StoryTemplate4 
                  setImage1={setImage1}
                  setImage2={setImage2}
                  setImage3={setImage3}
                  text1={text1}
                  setText1={setText1}
                />
              )
            } else if (storyTemplateId === 5) {
              return(
                <StoryTemplate5 
                  setImage1={setImage1}
                  setImage2={setImage2}
                  setImage3={setImage3}
                  text1={text1}
                  setText1={setText1}
                />
              )
            }
          }
        })()
      }
      <PrevButton 
        movePrevStep={movePrevStep}
      />
      <NextButton 
        moveNextStep={moveNextStep}
      />
    </div>
  );
};

export default StoryBoard;