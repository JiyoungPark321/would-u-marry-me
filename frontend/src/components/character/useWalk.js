import {useState} from "react";

export default function UseWalk (maxSteps) {
  const [position, setPosition] = useState(0);
  const [dir ,setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3
  }
  const stepSize = 16;
  const modifier = {
    down: {x: 0, y: stepSize},
    left: {x: -stepSize, y:0},
    right: {x: -stepSize, y:0},
    up: {x: 0, y:-stepSize},
  }
  function walk(dir) { //걷는 애니메이션 반복?
    // console.dir()
    setDir(directions[dir])
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }
  return {
    walk,
    dir, 
    step, 
    directions,
  }
}