import React,{useState,useEffect} from 'react'

export default function CustomFunction() {

    const [state,setState] = useState({
        counter:0,
        username:''
    });

    const handleOnClick = (e) => {
        setState(prevState => ({
            counter:prevState.counter + 1
        }))
    }

    const handleOnChange = (e) => {
        const value = e.target.value 
        setState(prevState => ({
            ...prevState,
            username:value
        }))
    }



  return (
    <div>
        {state.counter}
        <button onClick={handleOnClick}>Increment</button>
        Name {" "}
        <input type='text' name="username" value={state.username} autoComplete="off" onChange={handleOnChange}/>
        <br/>
        {state.username}
    </div>
  )
}
