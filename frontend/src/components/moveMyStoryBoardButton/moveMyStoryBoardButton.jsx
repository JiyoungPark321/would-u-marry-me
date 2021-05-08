import React from 'react';
import styles from './moveMyStoryBoardButton.module.css';

const MoveMyStoryBoardButton = ({ color }) => {

  return (
    <div className={`${styles['move-story-board-button']} ${color === "white" && styles['color-white']}`}>
      <i className="fas fa-th"></i>
    </div>
  );
};

export default MoveMyStoryBoardButton;