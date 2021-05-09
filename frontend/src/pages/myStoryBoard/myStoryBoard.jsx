import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import StoryList from '../../components/storyList/storyList';
import api from '../../service/api';
import styles from './myStoryBoard.module.css';

const MyStoryBoard = () => {
  const history = useHistory();

  const [modalState, setModalState] = useState(false);
  const [nickName, setNickName] = useState('');


  useEffect(() => {
    setNickName(localStorage.getItem("nickName"));
    console.log(localStorage.getItem("jwt"))
  },[])

  const changeModalState = () => {
    setModalState(!modalState);
  };

  const onLogOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    localStorage.removeItem("nickName");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("userName");
    history.push('/signin')
  }

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
            <div className={styles['header-greetings']}>{nickName} 님 안녕하세요? 
            </div>
            <div className={modalState ? `${styles['header-button']} ${styles['button-rotation']}` : styles['header-button']}>▲</div>
          </button>
          <div className={modalState ? `${styles['header-modal']} ${styles['visible-modal']}` : styles['header-modal']}>
            <button 
              className={styles['logout-button']}
              onClick={onLogOut}
            >로그아웃</button>
            <button 
              className={styles['edit-member-info-button']}
              // onClick 이동 로직 수정해야함.
              onClick={() => {history.push('/signin')}}
            >개인정보수정</button>
          </div>
        </div>
      </header>
      <main className={styles['main-container']}>
        <StoryList />
      </main>
      
    </div>
  );
};

export default MyStoryBoard;