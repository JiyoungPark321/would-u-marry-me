import React from 'react';
import { useHistory } from 'react-router';
import styles from './completeForm.module.css'


const CompleteForm = ({ storyBoardId }) => {

  const history = useHistory()

  const userName = localStorage.getItem("userName");

  const moveMyStoryBoard = () => {
    history.push(`/${userName}/storyboard`);
  };

  const moveCompletedStoryBoard = () => {
    history.push(`/${userName}/invitation/${storyBoardId}`)
  };

  const shareWithKakaoTalk = () => {
    // 아래 주소로 공유하면 됨!
    // `https://wouldumarryme.com/${userName}/invitation/${storyBoardId}`
  };

  

  return (
    <div className={styles['complete-box']}>
      <div className={styles['buttons-area']}>
        <div>
          <button
            className={styles['buttons']}
            onClick={moveMyStoryBoard}
          >
            마이스토리보드로 이동
          </button>
        </div>
        <div>
          <button
            className={styles['buttons']}
            onClick={moveCompletedStoryBoard}
          >
            완성본 보기
          </button>
        </div>
        <div>
          <button
            className={styles['buttons']}
            onClick={shareWithKakaoTalk}
          >
            카카오톡으로 공유하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;