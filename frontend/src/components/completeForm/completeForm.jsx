import React from 'react';
import styles from './completeForm.module.css'
const CompleteForm = () => {
  return (
    <div className={styles['complete-box']}>
      <div className={styles['buttons-area']}>
        <div>
          <button
            className={styles['buttons']}
          >
            마이페이지로 이동
          </button>
        </div>
        <div>
          <button
            className={styles['buttons']}
          >
            완성본 보기
          </button>
        </div>
        <div>
          <button
            className={styles['buttons']}
          >
            카카오톡으로 공유하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;