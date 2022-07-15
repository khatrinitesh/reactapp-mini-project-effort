import React, { useState,useEffect } from 'react'


const TIMEOUT_LIMIT = 5000

export default function CustomApp() {
  return (
    <div>
        <Notice/>
    </div>
  )
}


function NormalUsage(){
    const inputRef = React.useRef();

    function handleSubmit(e){
        e.preventDefault();
        console.log(inputRef.current.value)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="input" ref={inputRef} />
            <button> Submit form </button>
        </form>
        </>
    )
}



function Notice(){
    const [isVisible,setIsVisible] = useState(true) 
    const timeoutRef = React.useRef(null)

    const hideNotice = () => {
        setIsVisible(false)
    }

    const forceHideNotice = () => {
        clearTimeout(timeoutRef.current)
        hideNotice()
    }

    useEffect(() => {
        timeoutRef.current = setTimeout(hideNotice,TIMEOUT_LIMIT)
        return() => {
            clearTimeout(timeoutRef.current)
        }
    },[])

    return isVisible ? (
        <div className="Notice">
        <div>Notice content</div>
        <button onClick={forceHideNotice}>Close</button>
      </div>
    )
    : null
}