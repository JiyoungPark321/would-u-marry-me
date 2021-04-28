import React from 'react';
import styles from './signInForm.module.css';

const SignInForm = () => {
  return (
    <div className={styles['sign-in']}>
      <p className={styles['sign-in-text']}>로그인</p>
      <div>
        <div className={styles['id-container']}>
          <label 
            className={styles['input-label']}
            htmlFor="sign-in-id"
          >아이디</label>
          <div>
            <input 
              className={styles['input-field-style2']}
              id="sign-in-id" 
              type="text" 
              placeholder="Id" 
            />
          </div>
        </div>
        <div>
          <label 
            className={styles['input-label']}
            htmlFor="sign-in-password"
          >비밀번호</label>
          <input 
            className={styles['input-field-style2']}
            id="sign-in-password" 
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

export default SignInForm;