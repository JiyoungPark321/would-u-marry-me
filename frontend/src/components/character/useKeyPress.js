import {useEffect} from "react";

export default function UseKeyPress (fn) {
  useEffect(() => {
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener('keydown',fn);
  }, [fn]);
}