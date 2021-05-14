import React from 'react';
import Character from './character'
const CharacterActor = ({sprite, data, step = 0, dir = 0}) => {
  const {h, w} = data;
  return (
        <Character
          image={sprite} 
          data={{
            x: step * w,
            y: dir * h,
            w,
            h,
        }}>
        </Character>
  );
};

export default CharacterActor;