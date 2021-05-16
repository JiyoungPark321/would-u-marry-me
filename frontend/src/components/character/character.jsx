import React, { useEffect, useState } from 'react';

function Character({}) {
  const [x, setX] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [down, setDown] = useState(false);
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
  console.log(womanLeftImage)
  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
  },[moveRight,moveLeft])

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
    return x;
  }
  const actionXMap = {
    ArrowLeft: decrement,
    ArrowRight: increment,
    ArrowDown: wathForward
  }
  return (
    <>
    {(() => {
      if (left===false && right === false || down === true)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
            <img src={manDefaultImage}
              style = {{
              width: "100px",
              height: "100px",
              left: x+'rem',
              top: "500px",
              position: 'absolute',
            }}
            />
            <img src={womanDefaultImage}
              style = {{
              width: "100px",
              height: "100px",
              left: (x+2)+'rem',
              top: "511px",
              position: 'absolute',
            }}
            />
          </div>
        )
      else if (left === true)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
            <img src={manMoveImages}
              style = {{
              width: "100px",
              height: "100px",
              left: x+'rem',
              top: "500px",
              position: 'absolute',
            }}
            />
            <img src={womanMoveImages}
              style = {{
              width: "100px",
              height: "100px",
              left: (x+2)+'rem',
              top: "511px",
              position: 'absolute',
            }}
            />
          </div>
        )
      else if (right === true)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
          <img src={manMoveImages}
            style = {{
            width: "100px",
            height: "100px",
            left: x+'rem',
            top: "500px",
            position: 'absolute',
          }}
          />
          <img src={womanMoveImages}
            style = {{
            width: "100px",
            height: "100px",
            left: (x+2)+'rem',
            top: "511px",
            position: 'absolute',
          }}
          />
        </div>
        )
    })()}
  </>
  )
}
export default Character;