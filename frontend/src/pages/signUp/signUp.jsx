import React from 'react';
import styles from './signUp.module.css';

import Intro from '../../components/intro/intro';
import SignUpForm from '../../components/signUpForm/signUpForm';

const SignUp = () => {
  return (
    <div className={styles['sign-up']}>
      <Intro />
      <SignUpForm />
    </div>
  );
};

export default SignUp;