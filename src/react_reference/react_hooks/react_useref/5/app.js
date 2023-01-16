import React,{useEffect, useRef} from 'react'

export default function CustomApp() {

    const inputField = useRef();

    const focusInput = () => {
        inputField.current.focus();
    }
  return (
    <div>
        <input ref={inputField}/>
        <button onClick={focusInput}>Focus input</button>
    </div>
  )
}
