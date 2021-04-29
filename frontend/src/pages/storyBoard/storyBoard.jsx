import React, { useState } from 'react';
import StoryList from '../../components/storyList/storyList';
import styles from './storyBoard.module.css';

const StoryBoard = () => {
  const [modalState, setModalState] = useState(false);

  const changeModalState = () => {
    setModalState(!modalState);
  };

  return (
    <div className={styles['story-board']}>
      <header className={styles['header-container']}>
        <h1 className={styles['header-title']}>MY WEDDING INVITATIONS</h1>
        <div className={styles['header-deco-line']}></div>
        <div className={styles['header-greetings-container']}>
          <button 
            className={styles['header-button-container']}
            onClick={changeModalState}
          >
            <div className={styles['header-greetings']}>jiyoung 님 안녕하세요? 
            </div>
            <div className={modalState ? `${styles['header-button']} ${styles['button-rotation']}` : styles['header-button']}>▲</div>
          </button>
          <div className={modalState ? `${styles['header-modal']} ${styles['visible-modal']}` : styles['header-modal']}>
            <button className={styles['logout-button']}>로그아웃</button>
            <button className={styles['edit-member-info-button']}>개인정보수정</button>
          </div>
        </div>
      </header>
      <main className={styles['main-container']}>
        <StoryList />
      </main>
      
    </div>
  );
};

export default StoryBoard;