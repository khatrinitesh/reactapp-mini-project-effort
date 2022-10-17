import React,{useState} from 'react'

export const ToggleHand = (initialValue = false) => {

    const [state2,setToggle] = useState(initialValue)

    const toggle2 = () => {
        setToggle((prev) => !prev)
    }
  return {state2,toggle2}
}
