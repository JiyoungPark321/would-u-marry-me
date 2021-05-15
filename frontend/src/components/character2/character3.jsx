import React, { useEffect, useState } from 'react';

function Board({}) {
  const [x, setX] = useState(0);
  const actionXMap = {
    ArrowLeft: decrement,
    ArrowRight: increment
 }
  function handleKeyPress(e){
    console.log("moveEvent")
    console.log(e)
    console.log(e.key)
    const actionX = actionXMap[e.key];
    actionX && setX(actionX);
  }
  function increment(x){
    return x + 1;
  }
  function decrement(x){
    return x - 1;  
  }

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
  },[])
  
  return (
    <div onKeyPress={handleKeyPress} style ={{display: 'inline-block'}}>
      <img src="/images/c2_m_action12.png"
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
}
export default Board;