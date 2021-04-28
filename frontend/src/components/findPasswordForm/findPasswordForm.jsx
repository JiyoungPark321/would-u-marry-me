import React from 'react';
import styles from './findPasswordForm.module.css';

const FindPasswordForm = () => {
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
          <label 
            className={styles['input-label']}
            htmlFor="find-password-id"
          >아이디</label>
          <div>
            <input 
              className={styles['input-field-style2']}
              id="find-password-id"
              type="text" 
              placeholder="Id" 
            />
          </div>
        </div>
        <div className={styles['phone-number-container']}>
          <label 
            className={styles['input-label']}
            htmlFor="find-password-phone-number"  
          >전화번호</label>
          <div>
            <input
              className={styles['input-field-style1']}
              id="find-password-phone-number"
              type="text"
              placeholder="PhoneNumber" 
          />
            <button className={styles['authentication-number-button']}>인증번호 전송</button>
          </div>
        </div>
        <div>
          <label 
            className={styles['input-label']}
            htmlFor="find-password-verification-code-number"    
          >인증번호 입력</label>
          <input 
            className={styles['input-field-style2']}
            id="find-password-verification-code-number"
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

export default FindPasswordForm;
