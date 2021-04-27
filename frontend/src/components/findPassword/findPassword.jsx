import React from 'react';
import styles from './findPassword.module.css';

const FindPassword = () => {
  return (
    <div className={styles['find-password']}>
      <div className={styles.title}>
        <button className={styles['back-button']}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <p className={styles['find-password-text']}>비밀번호 찾기</p>
      </div>
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
        <div className={styles['phone-number-container']}>
          <p className={styles['input-label']}>전화번호</p>
          <div>
            <input
              className={styles['input-field-style1']} 
              type="text"
              placeholder="PhoneNumber" 
          />
            <button className={styles['authentication-number-button']}>인증번호 전송</button>
          </div>
        </div>
        <div>
          <p className={styles['input-label']}>인증번호 입력</p>
          <input 
            className={styles['input-field-style2']} 
            type="text" 
            placeholder="Verification Code Number" 
          />
        </div>
      </div>
      <button className={styles['next-button']}>
        다음 단계
      </button>
    </div>
  );
};

export default FindPassword;
