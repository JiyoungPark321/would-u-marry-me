import React from 'react';
import { useHistory } from 'react-router';
import styles from './moveMyStoryBoardButton.module.css';

const MoveMyStoryBoardButton = ({ color }) => {

  const history = useHistory();

  const MoveMyStoryBoard = () => {
    const userName = localStorage.getItem("userName");
    history.push(`/${userName}/storyboard`);
  }

  return (
    <button 
      className={`${styles['move-story-board-button']} ${color === "white" && styles['color-white']}`}
      onClick={MoveMyStoryBoard}  
    >
      <i className="fas fa-th"></i>
    </button>
  );
};

export default MoveMyStoryBoardButton;