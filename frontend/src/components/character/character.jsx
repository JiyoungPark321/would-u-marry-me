import React, { useEffect, useState } from 'react';
import styles from './character.module.css'
function Character({}) {
  const [x, setX] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [down, setDown] = useState(false);
  const [goTemplate, setGoTemplate] = useState(false);
  const [goTemplate2, setGoTemplate2] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [displayMove, setDisplayMove] = useState(false);
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
    if (x > 58){
      setSticky(true)
      // setDisplayMove(true)
      console.log(x+"sticky")
      return x 
    }
    else{
      console.log(x+"not sticky")
      // setDown(false)
      // setRight(true)
      // let move = moveRight%4;
      // setManMoveImages(manRightImages[move])
      // setwoManMoveImages(womanRightImages[move])
      // moveRight += 1
      // moveLeft = 0
      return x + 1;
    }
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
  // const displayMove = () => {
    
  // }
  const actionXMap = {
    ArrowLeft: decrement,
    ArrowRight: increment,
    ArrowDown: wathForward
  }
  const checkConflict = () => {
    let building = document.getElementById('school')
    let building2 = document.getElementById('hospital')
    let character = document.getElementById('character')

    if (building !== null && character !== null) {
      let dis = building.x - character.x
      if (dis > -200 && dis < 60) {
        setGoTemplate(true)
      }
      else {
        setGoTemplate(false)
      }
    }
    if (building2 !== null && character !== null) {
      let dis2 = building2.x - character.x
      if (dis2 > -200 && dis2 < 60) {
        setGoTemplate2(true)
      }
      else {
        setGoTemplate2(false)
      }
    }
  }
  const onClick = () => {
    setDown(true)
    alert("템플릿입장")
  }
  const onClick2 = () => {
    setDown(true)
    alert("템플릿2입장")
  }

  return (
    <>
    { sticky === false
    ?
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
  <div className={styles['storyBuilding2']}>
    { goTemplate2 === false
    ?
    ''
    :
    <div className={styles['goTemplate']}>
      <div className={styles['goTemplate-text']}>입장하시겠습니까?</div>
      <button className={styles['goTemplate-button']} onClick={onClick2}>Click!</button>
    </div>
    }
    <div className={styles['school']}>
      <img id="hospital" src="/images/hospital-alt-solid.svg"/>
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
    })()}
      </>
    :
    <div></div>
    }

  </>
  )
}
export default Character;