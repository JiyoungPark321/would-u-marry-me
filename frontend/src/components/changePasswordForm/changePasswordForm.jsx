import React from 'react';
import styles from './changePasswordForm.module.css';

const ChangePasswordForm = () => {
  return (
    <div className={styles['change-password']}>
      <p className={styles['change-password-text']}>비밀번호 변경</p>
      <div>
        <div className={styles['new-password-container']}>
          <label 
            className={styles['input-label']}
            htmlFor="change-password-new-password"
          >새 비밀번호</label>
          <div>
            <input 
              className={styles['input-field-style2']}
              id="change-password-new-password"
              type="text" 
              placeholder="New Password" 
            />
          </div>
        </div>
        <div>
          <label 
            className={styles['input-label']}
            htmlFor="change-password-new-password-check"
          >비밀번호</label>
          <input 
            className={styles['input-field-style2']}
            id="change-password-new-password-check"
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

export default ChangePasswordForm;