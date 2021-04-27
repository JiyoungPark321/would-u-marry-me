import React from 'react';
import styles from './signIn.module.css';

const SignIn = () => {
  return (
    <div className={styles['sign-in']}>
      <p className={styles['sign-in-text']}>로그인</p>
      <div>
        <div className={styles['id-container']}>
          <p className={styles['input-label']}>아이디</p>
          <div>
            <input 
              className={styles['input-field-style2']} 
              type="text" 
              placeholder="Id" 
            />
          </div>
        </div>
        <div>
          <p className={styles['input-label']}>비밀번호</p>
          <input 
            className={styles['input-field-style2']} 
            type="text" 
            placeholder="Password" 
          />
        </div>
      </div>
      <div>
        <button className={`${styles['button-common-styles']} ${styles['sign-in-button']}`}>
          로그인
        </button>
        <div className={styles['buttons-container']}>
          <button className={`${styles['button-common-styles']} ${styles['sign-up-button']}`}>
            회원가입하기
          </button>
          <button className={`${styles['button-common-styles']} ${styles['find-password-button']}`}>
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;