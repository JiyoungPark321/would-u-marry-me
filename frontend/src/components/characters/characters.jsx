import React, { useEffect, useState, useCallback } from 'react';
import styles from './characters.module.css';

const Characters = ({ charactersData, x, setX }) => {

  const [characterX, setCharacterX] = useState(0);

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const [moveLeft, setMoveLeft] = useState(0);
  const [moveRight, setMoveRight] = useState(0);

  const manDefaultImage =  charactersData.statuses[0].characterUrl
  const manRightImages = charactersData.statuses.slice(1,5).map(status => status.characterUrl)
  const manLeftImages = charactersData.statuses.slice(5,9).map(status => status.characterUrl)
  const womanDefaultImage = charactersData.statuses[9].characterUrl
  const womanRightImages = charactersData.statuses.slice(10,14).map(status => status.characterUrl)
  const womanLeftImages = charactersData.statuses.slice(14).map(status => status.characterUrl)

  const handleKeyPress = useCallback(e => {
    switch (e.key) {
      case 'ArrowLeft':
        setLeft(true)
        setRight(false)
        setMoveLeft(prev => (prev + 1) % 4);
        setMoveRight(0);
        setX(prev => {
          if (prev < 10) {
            return prev
          }
          return prev - 1
        })
        setCharacterX(prev => {
          if (prev < 10) {
            return prev
          }
          return prev - 1
        })
        break;
      case 'ArrowRight':
        setLeft(false)
        setRight(true)
        setMoveRight(prev => (prev + 1) % 4);
        setMoveLeft(0);
        setX(prev => {
          if (prev > 750) {
            return prev
          }
          return prev + 1
        })
        setCharacterX(prev => {
          if (prev > 100) {
            return prev
          }
          return prev + 1
        })
        break;
      case 'ArrowDown':
        setRight(false);
        setLeft(false);
        setMoveRight(0);
        setMoveLeft(0);
        break;
      default:
        // console.log(`Sorry, we are out of.`);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  
  const CharacterRender = () => {
    if (left === true) {
      return (
        <div className={styles['character-container']} style={{display: 'flex'}} >
          <div className={styles['character-box']} style={{ left: (characterX / 2) + 'rem'}} >
            <img className={styles['character-man']} src={manLeftImages[moveLeft]} alt="" />
            <img className={styles['character-woman']} src={womanLeftImages[moveLeft]} alt="" />
          </div>
        </div>
      )
    } else if (right === true) {
      return (
        <div className={styles['character-container']} style={{display: 'flex'}} >
          <div className={styles['character-box']} style={{ left: (characterX / 2) + 'rem' }} >
            <img className={styles['character-man']} src={manRightImages[moveRight]} alt="" />
            <img className={styles['character-woman']} src={womanRightImages[moveRight]} alt="" />
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles['character-container']} style={{display: 'flex'}} >
          <div className={styles['character-box']} style={{ left: (characterX / 2) + 'rem'}}>
            <img className={styles['character-man']} src={manDefaultImage} alt="" />
            <img className={styles['character-woman']} src={womanDefaultImage} alt="" />
          </div>
        </div>
      )
    }
  }

  return CharacterRender();
};
export default Characters;