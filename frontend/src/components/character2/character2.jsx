import React, { useEffect, useState } from 'react';
import styles from './character2.module.css'
const Character2 = () => {
  const [isMove, setIsMove] = useState(false);
  const moveEvent = () => {
    window.addEventListener('keydown', moveSelection);
  } 
  function leftArrowPressed() {
    console.log("moveEvent1")
    var element = document.getElementById("characterImage");
    element.style.left = parseInt(element.style.left) - 300 + 'px';
    console.log(parseInt(element.style.left))
    }

    function rightArrowPressed() {
    console.log("moveEvent2")
    var element = document.getElementById("characterImage");
    element.style.left = parseInt(element.style.left) + 300 + 'px';

    }

    function upArrowPressed() {
    console.log("moveEvent3")
    var element = document.getElementById("characterImage");
    element.style.top = parseInt(element.style.top) - 300 + 'px';
    }

    function downArrowPressed() {
    console.log("moveEvent4")
    var element = document.getElementById("characterImage");
    element.style.top = parseInt(element.style.top) + 300 + 'px';
    }

    function moveSelection(evt) {
      console.log("moveEvent")
        switch (evt.keyCode) {
            case 37:
            leftArrowPressed();
            break;
            case 39:
            rightArrowPressed();
            break;
            case 38:
            upArrowPressed();
            break;
            case 40:
            downArrowPressed();
            break;
            }
        };
  return (
    // <div id="characterImage" className={styles['character']} onLoad={moveEvent}>
      <img id="characterImage" src="/images/c2_m_action12.png" onLoad={moveEvent} 
      style=
      {{
        width: "300px",
        height: "300px",
        left: "0",
        top:"0",
      }
      }/>
    // </div>
  );
};

export default Character2;