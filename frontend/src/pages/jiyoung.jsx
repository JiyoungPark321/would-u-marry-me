import React from 'react';
import StepProgressBar from '../components/stepProgressBar/stepProgressBar';
import Intro from '../components/intro/intro';
import SignUpForm from '../components/signUpForm/signUpForm';
import SignInForm from '../components/signInForm/signInForm';
import FindPasswordForm from '../components/findPasswordForm/findPasswordForm';
import ChangePasswordForm from '../components/changePasswordForm/changePasswordForm';
import EditMemberInfoForm from '../components/editMemberInfoForm/editMemberInfoForm';
import PasswordAuthentication from '../components/passwordAuthentication/passwordAuthentication';
import MoveStoryBoardButton from '../components/moveStoryBoardButton/moveStoryBoardButton';
import { NextButton, PrevButton, PrevNextButton } from '../components/prevNextButton/prevNextButton';

const Jiyoung = () => {
  
  
  return (
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
      <MoveStoryBoardButton />
      <PrevNextButton />
      <NextButton />
      <PrevButton />
    </div>
  );
}

export default Jiyoung;