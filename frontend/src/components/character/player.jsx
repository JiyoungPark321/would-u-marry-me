import React from 'react';
import CharacterActor from './characterActor'
import UseKeyPress from './useKeyPress'
import UseWalk from './useWalk'
const Player = ({skin}) => {
  const {dir, step, walk} = UseWalk(3)
  const data = {
    h: 400,
    w: 400,
    // x: 100,
    // y: 100
  }
  UseKeyPress((e) => {
    // const dir = 
    // if (directions.hasOwnProperty(dir)) console.log(dir);
    walk(e.key.replace("Arrow", "").toLowerCase())
    
    e.preventDefault()
  })
  return (
    // <CharacterActor sprite={`/images/c2_m_action12.png`} data={data}>
    // </CharacterActor>
    <CharacterActor sprite={`/images/${skin}`} data={data} step={step} dir={dir}>
    </CharacterActor>
  );
};

export default Player;