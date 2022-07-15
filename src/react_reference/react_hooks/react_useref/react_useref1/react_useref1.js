import React,{useRef} from 'react'

export default function CustomApp() {
    const inputToFocus = useRef(null);

    const clickHandler = () => {
        inputToFocus.current.focus()
    }
  return (
    <div>
        <input type='text' ref={inputToFocus}/>
        <button onClick={clickHandler}>Focus on Input</button>
    </div>
  )
}
