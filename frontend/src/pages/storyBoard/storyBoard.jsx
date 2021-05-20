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
import CarouselType6 from '../../components/carousels/carouselType6/carouselType6';

import StoryTemplate1 from '../../components/storyTemplate/storyTemplate1/storyTemplate1';
import StoryTemplate2 from '../../components/storyTemplate/storyTemplate2/storyTemplate2';
import StoryTemplate3 from '../../components/storyTemplate/storyTemplate3/storyTemplate3';
import StoryTemplate4 from '../../components/storyTemplate/storyTemplate4/storyTemplate4';
import StoryTemplate5 from '../../components/storyTemplate/storyTemplate5/storyTemplate5';

import WeddingTemplate1 from '../../components/weddingTemplate/weddingTemplate1/weddingTemplate1';
import WeddingTemplate2 from '../../components/weddingTemplate/weddingTemplate2/weddingTemplate2';
import WeddingTemplate4 from '../../components/weddingTemplate/weddingTemplate4/weddingTemplate4';
import WeddingTemplate3 from '../../components/weddingTemplate/weddingTemplate3/weddingTemplate3';

import CompleteForm from '../../components/completeForm/completeForm';



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
  const [weddingId, setWeddingId] = useState(null);
  const [storyTemplateId, setStoryTemplateId] = useState(null);
  const [weddingTemplateId, setWeddingTemplateId] = useState(null);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  
  const [weddingImage1, setWeddingImage1] = useState(null);
  const [weddingText1, setWeddingText1] = useState('');
  const [weddingText2, setWeddingText2] = useState('');
  const [weddingDate, setWeddingDate] = useState(null);
  const [weddingTime, setWeddingTime] = useState(null);
  const [weddingPlace, setWeddingPlace] = useState(null);
  const [weddingMapPlace, setWeddingMapPlace] = useState(null);
  const [weddingMapX, setWeddingMapX] = useState(null);
  const [weddingMapY, setWeddingMapY] = useState(null);
  const [weddingManPhoneNumber, setWeddingManPhoneNumber] = useState(null);
  const [weddingWomanPhoneNumber, setWeddingWomanPhoneNumber] = useState(null);
  const [weddingManAccountNumber, setWeddingManAccountNumber] = useState(null);
  const [weddingWomanAccountNumber, setWeddingWomanAccountNumber] = useState(null);




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
          setCurrentStep(18);
        } else {
          if (res.data.data.weddingCard.spot) {
            newSaveCheck[18] = true;
            setCurrentStep(19);
          }
          if (res.data.data.weddingCard.template) {
            newSaveCheck[19] = true;
            newSaveCheck[20] = true;
            setCurrentStep(21);
          }
        }
        if (res.data.data.weddingCard == null && res.data.data.stories) {
          setCurrentStep(res.data.data.stories.length * 3 + 3);
          console.log(res.data.data.stories.length * 3 + 3);
        }
        res.data.data.stories.forEach(story => {
          newSaveCheck[story.index * 3 + 0] = true;
          newSaveCheck[story.index * 3 + 1] = true;
          if (story.template === 1 && story.comments.length === 2 && story.images.length === 2) {
            newSaveCheck[story.index * 3 + 2] = true;
          } else if (story.template === 2 && story.comments.length === 1 && story.images.length === 1) {
            newSaveCheck[story.index * 3 + 2] = true;
          } else if ((story.template === 3 || story.template === 4 || story.template ===5) && story.comments.length === 1 && story.images.length === 3) {
            newSaveCheck[story.index * 3 + 2] = true;
          } else {
            newSaveCheck[story.index * 3 + 2] = false;
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
        console.log(currentStep);
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  const resetStoryInfo = () => {
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setText1('');
    setText2('');
  };

  const resetWeddingInfo = () => {
    setWeddingImage1(null);
    setWeddingText1('');
    setWeddingText2('');
    setWeddingDate(null);
    setWeddingTime(null);
    setWeddingPlace(null);
    setWeddingMapPlace(null);
    setWeddingMapX(null);
    setWeddingMapY(null);
    setWeddingManPhoneNumber(null);
    setWeddingWomanPhoneNumber(null);
    setWeddingManAccountNumber(null);
    setWeddingWomanAccountNumber(null);
  }

  const _moveNextStep = () => {
    const newSaveCheck = [...saveCheck];
    newSaveCheck[currentStep] = true;
    currentStep < 22 
    ? setCurrentStep(currentStep + 1)
    : setCurrentStep(0);
    setSaveCheck(newSaveCheck);
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
    } else if ((currentStep === 3 || currentStep === 6 || currentStep === 9 || currentStep === 12 || currentStep === 15) && spotId !== null) {
      api.post('/story', {
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
      api.put('/storytemplate', {
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
    } else if (currentStep === 5 || currentStep === 8 || currentStep === 11 || currentStep === 14 || currentStep === 17 ) {
      if (storyTemplateId == 1) {
        const data = new FormData();
        data.append("storyId", storyId);
        data.append("image1", image1);
        data.append("image2", image2);
        data.append("text1", text1);
        data.append("text2", text2);

        api.put('/story/first', data, {
          headers: {
            Authorization: localStorage.getItem("jwt"),
            "Content-Type": "multipart/form-data"
          }
        })
          .then((res) => {
            console.log(res);
            resetStoryInfo();
            _moveNextStep();
          })
          .catch((err) => {
            console.error(err);
            resetStoryInfo();
          })
        _moveNextStep();

      } else if (storyTemplateId === 2) {
        const data = new FormData();
        data.append("storyId", storyId);
        data.append("image1", image1);
        data.append("text1", text1);

        api.put('/story/second', data, {
          headers: {
            Authorization: localStorage.getItem("jwt"),
            "Content-Type": "multipart/form-data"
          }
        })
          .then((res) => {
            console.log(res);
            resetStoryInfo();
            _moveNextStep();
          })
          .catch((err) => {
            console.error(err);
            resetStoryInfo();
          })
        _moveNextStep();

      } else if (storyTemplateId === 3 || storyTemplateId === 4 || storyTemplateId === 5) {
        const data = new FormData();
        data.append("storyId", storyId);
        data.append("image1", image1);
        data.append("image2", image2);
        data.append("image3", image3);
        data.append("text1", text1);

        api.put('/story/third', data, {
          headers: {
            Authorization: localStorage.getItem("jwt"),
            "Content-Type": "multipart/form-data"
          }
        })
          .then((res) => {
            console.log(res);
            resetStoryInfo();
            _moveNextStep();
          })
          .catch((err) => {
            console.error(err);
            resetStoryInfo();
          })
        _moveNextStep();
      }
    } else if (currentStep === 18 && spotId !== null ) {
      api.post('/weddingcard', {
        spotId,
        storyBoardId: id
      }, {
        headers: {Authorization: localStorage.getItem("jwt")}
      })
        .then((res) => {
          setWeddingId(res.data.data.id);
          _moveNextStep();
        })
        .catch((err) => {
          console.error(err);
        })
    } else if (currentStep === 19) {
      api.put('/weddingcardtemplate', {
        weddingId,
        weddingTemplateId
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
    } else if (currentStep === 20) {
      if (weddingTemplateId === 1) {
        const data = new FormData();
        data.append("weddingId", weddingId);
        data.append("weddingImage1", weddingImage1);
        data.append("weddingText1", weddingText1);
        data.append("weddingText2", weddingText2);
        data.append("weddingDate", weddingDate);
        data.append("weddingTime", weddingTime);
        data.append("weddingPlace", weddingPlace);
        data.append("weddingMapPlace", weddingMapPlace);
        data.append("weddingMapX", weddingMapX);
        data.append("weddingMapY", weddingMapY);

        api.put('/weddingcard/template1', data, {
          headers: {
            Authorization: localStorage.getItem("jwt"),
            "Content-Type": "multipart/form-data"
          }
        })
          .then((res) => {
            console.log(res);
            resetWeddingInfo();
            _moveNextStep();
          })
          .catch((err) => {
            console.error(err);
            resetWeddingInfo();
          })
        _moveNextStep();
      } else if (weddingTemplateId === 2) {
      const data = new FormData();
      data.append("weddingId", weddingId);
      data.append("weddingText1", weddingText1);
      data.append("weddingText2", weddingText2);
      data.append("weddingDate", weddingDate);
      data.append("weddingTime", weddingTime);
      data.append("weddingPlace", weddingPlace);
      data.append("weddingMapPlace", weddingMapPlace);
      data.append("weddingMapX", weddingMapX);
      data.append("weddingMapY", weddingMapY);

      api.put('/weddingcard/template2', data, {
        headers: {
          Authorization: localStorage.getItem("jwt"),
          "Content-Type": "multipart/form-data"
        }
      })
        .then((res) => {
          console.log(res);
          resetWeddingInfo();
          _moveNextStep();
        })
        .catch((err) => {
          console.error(err);
          resetWeddingInfo();
        })
      _moveNextStep();
      } else if (weddingTemplateId === 3) {
        const data = new FormData();
        data.append("weddingId", weddingId);
        data.append("weddingImage1", weddingImage1);
        data.append("weddingText1", weddingText1);
        data.append("weddingText2", weddingText2);
        data.append("weddingDate", weddingDate);
        data.append("weddingTime", weddingTime);
        data.append("weddingPlace", weddingPlace);
        data.append("weddingMapPlace", weddingMapPlace);
        data.append("weddingMapX", weddingMapX);
        data.append("weddingMapY", weddingMapY);
        data.append("weddingManPhoneNumber", weddingManPhoneNumber);
        data.append("weddingWomanPhoneNumber", weddingWomanPhoneNumber);
        data.append("weddingManAccountNumber", weddingManAccountNumber);
        data.append("weddingWomanAccountNumber", weddingWomanAccountNumber);
        

        api.put('/weddingcard/template3', data, {
          headers: {
            Authorization: localStorage.getItem("jwt"),
            "Content-Type": "multipart/form-data"
          }
        })
          .then((res) => {
            console.log(res);
            resetWeddingInfo();
            _moveNextStep();
          })
          .catch((err) => {
            console.error(err);
            resetWeddingInfo();
          })
        _moveNextStep();
      } else if (weddingTemplateId === 4) {
        const data = new FormData();
        data.append("weddingId", weddingId);
        data.append("weddingImage1", weddingImage1);
        data.append("weddingText1", weddingText1);
        data.append("weddingText2", weddingText2);
        data.append("weddingDate", weddingDate);
        data.append("weddingTime", weddingTime);
        data.append("weddingPlace", weddingPlace);
        data.append("weddingManPhoneNumber", weddingManPhoneNumber);
        data.append("weddingWomanPhoneNumber", weddingWomanPhoneNumber);
        data.append("weddingManAccountNumber", weddingManAccountNumber);
        data.append("weddingWomanAccountNumber", weddingWomanAccountNumber);

        api.put('/weddingcard/template4', data, {
          headers: {
            Authorization: localStorage.getItem("jwt"),
            "Content-Type": "multipart/form-data"
          }
        })
          .then((res) => {
            console.log(res);
            resetWeddingInfo();
            _moveNextStep();
          })
          .catch((err) => {
            console.error(err);
            resetWeddingInfo();
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
      <div 
        className={styles.top}
      >
        <StepProgressBar
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          saveCheck={saveCheck}
        />
        <MoveMyStoryBoardButton />
      </div>
      <div className={styles.middle}>
      {
        (() => {
          if (currentStep === 0) {
            return (
              <CarouselType1 
                setBackgroundUrl={setBackgroundUrl} 
                setBackgroundId={setBackgroundId}
              />
            );   
          } else if (currentStep === 1) {
            return (
              <CarouselType2 
                setMusicId={setMusicId}
              />
            )
          } else if (currentStep === 2) {
            return (
              <CarouselType3 
                setCharacterId={setCharacterId}
              />
            )
          } else if (currentStep === 3 || currentStep === 6 || currentStep === 9 || currentStep === 12 || currentStep === 15) {
            return (
              <CarouselType4 
                setSpotId={setSpotId}
              />
            )
          } else if (currentStep === 4 || currentStep === 7 || currentStep === 10 || currentStep === 13 || currentStep === 16) {
            return (
              <CarouselType5
                setStoryTemplateId={setStoryTemplateId}
              />
            )
          } else if (currentStep === 5 || currentStep === 8 || currentStep === 11 || currentStep === 14 || currentStep === 17) {
            // if (template == 1) {
            
            // }
            if (storyTemplateId === 1) {
              return (
                <StoryTemplate1
                  image1={image1} 
                  setImage1={setImage1}
                  image2={image2}
                  setImage2={setImage2}
                  text1={text1}
                  setText1={setText1}
                  text2={text2}
                  setText2={setText2}
                />
              )
            } else if (storyTemplateId === 2) {
              return (
                <StoryTemplate2
                  image1={image1}
                  setImage1={setImage1}
                  text1={text1}
                  setText1={setText1}
                />
              )
            } else if (storyTemplateId === 3) {
              return (
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
              return (
                <StoryTemplate4
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
            } else if (storyTemplateId === 5) {
              return (
                <StoryTemplate5 
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
            } 
          } else if (currentStep === 18) {
            return (
              <CarouselType4 
                setSpotId={setSpotId}
              />
            )
          } else if (currentStep === 19) {
            return (
              <CarouselType6 
                setWeddingTemplateId={setWeddingTemplateId}
              />
            )
          } else if (currentStep === 20) {
            if (weddingTemplateId === 1) {
              return (
                <WeddingTemplate1
                  weddingImage1={weddingImage1}
                  setWeddingImage1={setWeddingImage1}
                  weddingText1={weddingText1}
                  setWeddingText1={setWeddingText1}
                  weddingText2={weddingText2}
                  setWeddingText2={setWeddingText2}
                  weddingDate={weddingDate}
                  setWeddingDate={setWeddingDate}
                  weddingTime={weddingTime}
                  setWeddingTime={setWeddingTime}
                  weddingPlace={weddingPlace}
                  setWeddingPlace={setWeddingPlace}
                  weddingMapPlace={weddingMapPlace}
                  setWeddingMapPlace={setWeddingMapPlace}
                  weddingMapX={weddingMapX}
                  setWeddingMapX={setWeddingMapX}
                  weddingMapY={weddingMapY} 
                  setWeddingMapY={setWeddingMapY} 
                />
              )
            } else if (weddingTemplateId === 2) {
              return (
                <WeddingTemplate2
                  weddingText1={weddingText1}
                  setWeddingText1={setWeddingText1}
                  weddingText2={weddingText2}
                  setWeddingText2={setWeddingText2}
                  weddingDate={weddingDate}
                  setWeddingDate={setWeddingDate}
                  weddingTime={weddingTime}
                  setWeddingTime={setWeddingTime}
                  weddingPlace={weddingPlace}
                  setWeddingPlace={setWeddingPlace}
                  weddingMapPlace={weddingMapPlace}
                  setWeddingMapPlace={setWeddingMapPlace}
                  weddingMapX={weddingMapX}
                  setWeddingMapX={setWeddingMapX}
                  weddingMapY={weddingMapY} 
                  setWeddingMapY={setWeddingMapY}
                />
              )
            } else if (weddingTemplateId === 3) {
              return (
                <WeddingTemplate3 
                  weddingImage1={weddingImage1}
                  setWeddingImage1={setWeddingImage1}
                  weddingText1={weddingText1}
                  setWeddingText1={setWeddingText1}
                  weddingText2={weddingText2}
                  setWeddingText2={setWeddingText2}
                  weddingDate={weddingDate}
                  setWeddingDate={setWeddingDate}
                  weddingTime={weddingTime}
                  setWeddingTime={setWeddingTime}
                  weddingPlace={setWeddingPlace}
                  setWeddingPlace={setWeddingPlace}
                  weddingMapPlace={weddingMapPlace}
                  setWeddingMapPlace={setWeddingMapPlace}
                  weddingMapX={weddingMapX}
                  setWeddingMapX={setWeddingMapX}
                  weddingMapY={weddingMapY}
                  setWeddingMapY={setWeddingMapY}
                  weddingManPhoneNumber={weddingManPhoneNumber}
                  setWeddingManPhoneNumber={setWeddingManPhoneNumber}
                  weddingWomanPhoneNumber={weddingWomanPhoneNumber}
                  setWeddingWomanPhoneNumber={setWeddingWomanPhoneNumber}
                  weddingManAccountNumber={weddingManAccountNumber}
                  setWeddingManAccountNumber={setWeddingManAccountNumber}
                  weddingWomanAccountNumber={weddingWomanAccountNumber}
                  setWeddingWomanAccountNumber={setWeddingWomanAccountNumber}
                />
              )
            } else if (weddingTemplateId === 4) {
              return (
                <WeddingTemplate4 
                  weddingImage1={weddingImage1}
                  setWeddingImage1={setWeddingImage1}
                  weddingText1={weddingText1}
                  setWeddingText1={setWeddingText1}
                  weddingText2={weddingText2}
                  setWeddingText2={setWeddingText2}
                  weddingDate={weddingDate}
                  setWeddingDate={setWeddingDate}
                  weddingTime={weddingTime}
                  setWeddingTime={setWeddingTime}
                  weddingPlace={setWeddingPlace}
                  setWeddingPlace={setWeddingPlace}
                  weddingManPhoneNumber={weddingManPhoneNumber}
                  setWeddingManPhoneNumber={setWeddingManPhoneNumber}
                  weddingWomanPhoneNumber={weddingWomanPhoneNumber}
                  setWeddingWomanPhoneNumber={setWeddingWomanPhoneNumber}
                  weddingManAccountNumber={weddingManAccountNumber}
                  setWeddingManAccountNumber={setWeddingManAccountNumber}
                  weddingWomanAccountNumber={weddingWomanAccountNumber}
                  setWeddingWomanAccountNumber={setWeddingWomanAccountNumber}
                />
              )
            }
          } else if (currentStep === 21) {
            return saveCheck.every(elem => elem) ? <CompleteForm storyBoardId={id} /> : <div>아직 작성되지 않은 단계가 있습니다.</div>
          }
        })()
      }
      </div>

      

      <div className={styles.bottom}>
        <div className={`${styles['prev-button']} ${(currentStep === 0 || currentStep === 21) && styles.none}`}>
          <PrevButton 
            movePrevStep={movePrevStep}
          />
        </div>
        <div className={`${styles['next-button']} ${currentStep === 21 && styles.none}`}>
          <NextButton 
            moveNextStep={moveNextStep}
          />
        </div>
      </div>
    </div>
  );
};

export default StoryBoard;