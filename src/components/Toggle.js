import React from "react"
import {useToggle} from '../hooks/useToggle';

export const Toggle = () => {
  
  const [isToggled, setToggle] = useToggle(initial);
  
  return (
    <div>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle
      </button>
      {isToggled && <p> To be toggled.</p>}
    </div>
  )
}

export default Toggle
