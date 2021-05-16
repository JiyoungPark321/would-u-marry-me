import React, { useEffect, useState } from 'react';
import styles from './character.module.css'
function Character({}) {
  const [x, setX] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [down, setDown] = useState(false);
  const [goTemplate, setGoTemplate] = useState(false);
  let moveLeft = 0
  let moveRight = 0
  const [manMoveImages, setManMoveImages] = useState("");
  const [womanMoveImages, setwoManMoveImages] = useState("");
  const images = [
    "images/c2_m_action01.png",
    "images/c2_m_action11.png",
    "images/c2_m_action12.png",
    "images/c2_m_action13.png",
    "images/c2_m_action14.png",
    "images/c2_m_action21.png",
    "images/c2_m_action22.png",
    "images/c2_m_action23.png",
    "images/c2_m_action24.png",
    "images/c2_w_action01.png",
    "images/c2_w_action11.png",
    "images/c2_w_action12.png",
    "images/c2_w_action13.png",
    "images/c2_w_action14.png",
    "images/c2_w_action21.png",
    "images/c2_w_action22.png",
    "images/c2_w_action23.png",
    "images/c2_w_action24.png",
  ]
  const manDefaultImage =  images[0]
  const manRightImages = images.slice(1,5)
  const manLeftImage = images.slice(5,9)
  const womanDefaultImage = images[9]
  const womanRightImages = images.slice(10,14)
  const womanLeftImage = images.slice(14)

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);    
  },[])
  useEffect(()=> {
    checkConflict()
  },[x])

  const handleKeyPress = (e) => {
    const actionX = actionXMap[e.key];
    actionX && setX(actionX);
  }
  
  const increment = (x) => {
    setDown(false)
    setRight(true)
    let move = moveRight%4;
    setManMoveImages(manRightImages[move])
    setwoManMoveImages(womanRightImages[move])
    moveRight += 1
    moveLeft = 0
    return x + 1;
  }
  const decrement = (x) => {
    setDown(false)
    setLeft(true)
    let move = moveLeft%4;
    setManMoveImages(manLeftImage[move])
    setwoManMoveImages(womanLeftImage[move])
    moveLeft += 1
    moveRight = 0
    return x - 1;  
  }
  
  const wathForward = (x) => {
    setDown(true)
    setRight(false)
    setLeft(false)
    moveLeft = 0
    moveRight = 0
    return x;
  }
  const actionXMap = {
    ArrowLeft: decrement,
    ArrowRight: increment,
    ArrowDown: wathForward
  }
  const checkConflict = () => {
    let building = document.getElementById('school')
    let character = document.getElementById('character')
    if (building !== null && character !== null) {
      // let dis = Math.pow(building.x - character.x, 2) + Math.pow(building.y - character.y, 2)
      let dis = Math.pow(building.x - character.x, 2)
      console.log(dis)
      if (dis>5000 && dis < 8000) {
        setGoTemplate(true)
      }
      else {
        setGoTemplate(false)
      }
    }
  }
  const onClick = () => {
    alert("템플릿입장")
  }
  return (
    <>
    <div className={styles['storyBuilding']}>
      { goTemplate === false
      ?
      ''
      :
      <div className={styles['goTemplate']}>
        <div className={styles['goTemplate-text']}>입장하시겠습니까?</div>
        <button className={styles['goTemplate-button']} onClick={onClick}>Click!</button>
      </div>
      }
      <div className={styles['school']}>
        <img id="school" src="/images/school-solid.svg"/>
      </div>
    </div>
    {(() => {
      if (left===false && right === false || down === true)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
            <div
              style = {{
                width: "130px",
                height: "100px",
                left: x+'rem',
                top: "500px",
                position: "absolute"
              }}
            >
              <img id="character" src={manDefaultImage}
                style = {{
                width: "100px",
                height: "100px",
                left: "0px",
                position: 'absolute',
              }}
              />
              <img src={womanDefaultImage}
                style = {{
                width: "100px",
                height: "100px",
                left: "40px",
                position: 'absolute',
              }}
              />
            </div>
          </div>
        )
      else if (left === true)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
            <div
              style = {{
                width: "130px",
                height: "100px",
                left: x+'rem',
                top: "500px",
                position: "absolute"
              }}
            >
              <img id="character" src={manMoveImages}
                style = {{
                width: "100px",
                height: "100px",
                left: '0px',
                position: 'absolute',
              }}
              />
              <img src={womanMoveImages}
                style = {{
                width: "100px",
                height: "100px",
                left:'40px',
                position: 'absolute',
              }}
              />
            </div>
          </div>
        )
      else if (right === true)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
            <div
              style = {{
                width: "130px",
                height: "100px",
                left: x+'rem',
                top: "500px",
                position: "absolute"
              }}
            >
              <img id="character" src={manMoveImages}
                style = {{
                width: "100px",
                height: "100px",
                left:'0px',
                position: 'absolute',
              }}
              />
              <img src={womanMoveImages}
                style = {{
                width: "100px",
                height: "100px",
                left: '40px',
                position: 'absolute',
              }}
              />
            </div>
          </div>
        )
    })()}
  </>
  )
}
export default Character;