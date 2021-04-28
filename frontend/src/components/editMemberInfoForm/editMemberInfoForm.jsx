import React from 'react';
import styles from './editMemberInfoForm.module.css';

const EditMemberInfoForm = () => {
  return (
    <div className={styles['edit-member-info']}>
      <div className={styles.title}>
        <button className={styles['back-button']}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <p className={styles['edit-member-info-text']}>회원 정보 수정</p>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="edit-member-info-id"
        >아이디</label>
        <input 
          className={styles['input-field-style2']}
          id="edit-member-info-id"
          type="text" 
          placeholder="Id" 
        />
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="edit-member-info-new-password"
        >새 비밀번호</label>
        <input 
          className={styles['input-field-style2']}
          id="edit-member-info-new-password"
          type="text" 
          placeholder="New Password" 
        />
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="edit-member-info-new-password-check"  
        >새 비밀번호 확인</label>
        <input 
          className={styles['input-field-style2']}
          id="edit-member-info-new-password-check"
          type="text" 
          placeholder="New Password Check" 
        />
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="edit-member-info-nickname"  
        >닉네임</label>
        <div>
          <input
            className={styles['input-field-style1']} 
            id="edit-member-info-nickname"
            type="text"
            placeholder="Nickname" 
        />
          <button className={styles['duplicate-check-button']} >중복체크</button>
        </div>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="edit-member-info-phone-number"
        >전화번호</label>
        <input 
          className={styles['input-field-style2']} 
          id="edit-member-info-phone-number"
          type="text" 
          placeholder="PhoneNumber" 
        />
      </div>
      <button className={styles['edit-button']}>
        수정하기
      </button>
    </div>
  );
};

export default EditMemberInfoForm;
