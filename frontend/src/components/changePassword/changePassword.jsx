import React from 'react';
import styles from './changePassword.module.css';

const ChangePassword = () => {
  return (
    <div className={styles['change-password']}>
      <p className={styles['change-password-text']}>비밀번호 변경</p>
      <div>
        <div className={styles['new-password-container']}>
          <p className={styles['input-label']}>새 비밀번호</p>
          <div>
            <input 
              className={styles['input-field-style2']} 
              type="text" 
              placeholder="New Password" 
            />
          </div>
        </div>
        <div>
          <p className={styles['input-label']}>비밀번호</p>
          <input 
            className={styles['input-field-style2']} 
            type="text" 
            placeholder="New Password Check" 
          />
        </div>
      </div>
      <div>
        <button className={styles['change-button']}>
          변경하기
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;