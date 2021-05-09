import React from 'react';
import StepProgressBar from '../components/stepProgressBar/stepProgressBar';
import Intro from '../components/intro/intro';
import SignUpForm from '../components/signUpForm/signUpForm';
import SignInForm from '../components/signInForm/signInForm';
import FindPasswordForm from '../components/findPasswordForm/findPasswordForm';
import ChangePasswordForm from '../components/changePasswordForm/changePasswordForm';
import EditMemberInfoForm from '../components/editMemberInfoForm/editMemberInfoForm';
import PasswordAuthentication from '../components/passwordAuthentication/passwordAuthentication';
import MoveMyStoryBoardButton from '../components/moveMyStoryBoardButton/moveMyStoryBoardButton';
import { NextButton, PrevButton } from '../components/prevNextButton/prevNextButton';
import MusicInfo from '../components/musicInfo/musicInfo';
import CarouselType1 from '../components/carousels/carouselType1/carouselType1';
import CarouselType2 from '../components/carousels/carouselType2/carouselType2';
import CarouselType3 from '../components/carousels/carouselType3/carouselType3';
import CarouselType4 from '../components/carousels/carouselType4/carouselType4';
import CarouselType5 from '../components/carousels/carouselType5/carouselType5';

const Jiyoung = () => {
  
  
  return (
    // <div style={{backgroundColor: "black"}}>
    <div>
      지영페이지
      <i className="fas fa-air-freshener"></i>
      <StepProgressBar onClickHandler={() => {
        console.log('hi');
      }}/>
      <Intro />
      <SignUpForm />
      <SignInForm />
      <FindPasswordForm />
      <ChangePasswordForm />
      <EditMemberInfoForm />
      <PasswordAuthentication />
      <MoveMyStoryBoardButton />
      <NextButton />
      <PrevButton />
      <MusicInfo />
      <CarouselType1 />
      <br/>
      <br/>
      <CarouselType2 />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <CarouselType3 />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <CarouselType4 />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <CarouselType5 />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Jiyoung;