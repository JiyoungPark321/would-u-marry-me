import React, { useEffect, useState } from 'react';

function Board({}) {
  const [x, setX] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  let moveLeft = 0
  let moveRight = 0
  const [moveImages, setMoveImages] = useState("");
  // let moveImages = ""
  const defaultImage =  "images/c2_m_action01.png"
  const rightImages =
  [
    "images/c2_m_action11.png",
    "images/c2_m_action12.png",
    "images/c2_m_action13.png",
    "images/c2_m_action14.png",

  ]
  const leftImage = [
    "images/c2_m_action21.png",
    "images/c2_m_action22.png",
    "images/c2_m_action23.png",
    "images/c2_m_action24.png",
  ]
  const actionXMap = {
    ArrowLeft: decrement,
    ArrowRight: increment
 }
  function handleKeyPress(e){
    const actionX = actionXMap[e.key];
    actionX && setX(actionX);
  }
  function increment(x){
    setRight(true)
    let move = moveRight%4;
    setMoveImages(rightImages[move])
    moveRight += 1
    moveLeft = 0
    return x + 1;
  }
  function decrement(x){
    setLeft(true)
    let move = moveLeft%4;
    setMoveImages(leftImage[move])
    moveLeft += 1
    moveRight = 0
    return x - 1;  
  }

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
  },[moveRight,moveLeft])
  
  return (
    <>
    {(() => {
      if (left===false && right === false)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
            <img src={defaultImage}
              style = {{
              width: "100px",
              height: "100px",
              left: x+'rem',
              top: "500px",
              position: 'absolute',
            }}
            />
          </div>
        )
      else if (left === true)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
            <img src={moveImages}
              style = {{
              width: "100px",
              height: "100px",
              left: x+'rem',
              top: "500px",
              position: 'absolute',
            }}
            />
          </div>
        )
      else if (right === true)
        return (
          <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
          <img src={moveImages}
            style = {{
            width: "100px",
            height: "100px",
            left: x+'rem',
            top: "500px",
            position: 'absolute',
          }}
          />
        </div>
        )
    })()}
    {/* <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
      { left === false
      ?
      <img src={moveImages}
      style = {{
        width: "100px",
        height: "100px",
        left: x+'rem',
        top: "500px",
        position: 'absolute',
      }}
      />
      :
      <img src={moveImages}
      style = {{
        width: "100px",
        height: "100px",
        left: x+'rem',
        top: "500px",
        position: 'absolute',
      }}
      />
      }
    </div> */}
  </>
  )
}
export default Board;