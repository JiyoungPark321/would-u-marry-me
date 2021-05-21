import React from 'react';
import styles from './passwordAuthentication.module.css';

const PasswordAuthentication = () => {
  return (
    <div className={styles['password-authentication']}>
      <div>
        <p className={styles['info-text']}>개인 정보 조회를 위해 비밀번호 인증이 필요합니다.</p>
        <p className={styles['info-text']}>비밀번호 입력 후 확인 버튼을 눌러주세요.</p>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="password-authentication-password"
        >비밀번호</label>
        <input 
          className={styles['input-field-style2']} 
          id="password-authentication-password"
          type="text" 
          placeholder="Password" 
        />
      </div>
      <button className={styles['confirm-button']}>확인</button>
    </div>
  );
};

export default PasswordAuthentication;