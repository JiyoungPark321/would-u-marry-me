import React from 'react';
// import styles from './character.module.css'
const Character = ({image, data}) => {
  const { y, x, h, w} = data;
  return (
    <div
      style = {{
        width: "100px",
        height: "100px"
      }}
    >
      <div
        style= {{
          display: "inline-block",
          height: `${h}px`,
          width: `${w}px`,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${x}px -${y}px`,
        }}
        >
        {/* <img src="./images/c2_m_action12.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Character;