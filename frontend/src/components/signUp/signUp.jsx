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
        <p className={styles['input-label']}>아이디</p>
        <div>
          <input 
            className={styles['input-field-style1']} 
            type="text" 
            placeholder="Id" 
          />
          <button className={styles['duplicate-check-button']} >중복체크</button>
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
      <div>
        <p className={styles['input-label']}>비밀번호 확인</p>
        <input 
          className={styles['input-field-style2']} 
          type="text" 
          placeholder="Password Check" 
        />
      </div>
      <div>
        <p className={styles['input-label']}>닉네임</p>
        <div>
          <input
            className={styles['input-field-style1']} 
            type="text"
            placeholder="Nickname" 
        />
          <button className={styles['duplicate-check-button']} >중복체크</button>
        </div>
      </div>
      <div>
        <p className={styles['input-label']}>전화번호</p>
        <input 
          className={styles['input-field-style2']} 
          type="text" 
          placeholder="PhoneNumber" 
        />
      </div>
      <div className={styles['agreement-container']}>
        <input
          className={styles['agreement-checkbox']}
          type="checkbox" 
          id="agreement" 
          name="agreement" 
          value="agreement" 
        />
        <label
          className={styles['agreement-text']}
          htmlFor="agreement"
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
