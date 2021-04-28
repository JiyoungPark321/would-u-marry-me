import React from 'react';
import styles from './signUp.module.css';

const SignUp = () => {
  return (
    <div className={styles['sign-up']}>
      <div className={styles.title}>
        <button className={styles['back-button']}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <p className={styles['sign-up-text']}>회원가입</p>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-id"
        >아이디</label>
        <div>
          <input 
            className={styles['input-field-style1']}
            id="sign-up-id"
            type="text" 
            placeholder="Id" 
          />
          <button className={styles['duplicate-check-button']} >중복체크</button>
        </div>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-password"
        >비밀번호</label>
        <input 
          className={styles['input-field-style2']}
          id="sign-up-password"
          type="text" 
          placeholder="Password" 
        />
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-password-check"
        >비밀번호 확인</label>
        <input 
          className={styles['input-field-style2']}
          id="sign-up-password-check"
          type="text" 
          placeholder="Password Check" 
        />
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-nickname"
        >닉네임</label>
        <div>
          <input
            className={styles['input-field-style1']}
            id="sign-up-nickname"
            type="text"
            placeholder="Nickname" 
        />
          <button className={styles['duplicate-check-button']} >중복체크</button>
        </div>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-phone-number"
        >전화번호</label>
        <input 
          className={styles['input-field-style2']}
          id="sign-up-phone-number"
          type="text" 
          placeholder="PhoneNumber" 
        />
      </div>
      <div className={styles['agreement-container']}>
        <input
          className={styles['agreement-checkbox']}
          type="checkbox" 
          id="sign-up-agreement" 
          name="agreement" 
          value="agreement" 
        />
        <label
          className={styles['agreement-text']}
          htmlFor="sign-up-agreement"
        >
          가입에 동의 하시겠습니까?
        </label>
      </div>
      <button className={styles['sign-up-button']}>
        회원가입하기
      </button>
    </div>
  );
};

export default SignUp;
