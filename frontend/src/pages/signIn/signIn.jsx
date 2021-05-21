import React from 'react';
import styles from './signIn.module.css';

import Intro from '../../components/intro/intro';
import SignInForm from '../../components/signInForm/signInForm';

const SignIn = () => {
  return (
    <div className={styles['sign-in']}>
      <Intro />
      <SignInForm />
    </div>
  );
};

export default SignIn;