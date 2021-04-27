import React from 'react';
import styles from './editMemberInfo.module.css';

const EditMemberInfo = () => {
  return (
    <div className={styles['edit-member-info']}>
      <div className={styles.title}>
        <button className={styles['back-button']}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <p className={styles['edit-member-info-text']}>회원 정보 수정</p>
      </div>
      <div>
        <p className={styles['input-label']}>아이디</p>
        <input 
          className={styles['input-field-style2']} 
          type="text" 
          placeholder="Id" 
        />
      </div>
      <div>
        <p className={styles['input-label']}>새 비밀번호</p>
        <input 
          className={styles['input-field-style2']} 
          type="text" 
          placeholder="New Password" 
        />
      </div>
      <div>
        <p className={styles['input-label']}>새 비밀번호 확인</p>
        <input 
          className={styles['input-field-style2']} 
          type="text" 
          placeholder="New Password Check" 
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
      <button className={styles['edit-button']}>
        수정하기
      </button>
    </div>
  );
};

export default EditMemberInfo;
