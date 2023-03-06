import React,{useState,useEffect} from 'react'

export default function CustomFunction() {

    const [counter,setCounter] = useState(0)
    const [username, setUsername] = useState("");
    

    const handleClick = () => {
        setCounter(c => c + 1)
    }

    useEffect(() => {
        console.log("useEffect executed");
      });

      const handleValue = (e) => {
        setUsername(e.target.value)
      }
  return (
    <div>
        {counter}
        <button onClick={handleClick}>INcrement</button>

        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter your name"
          autoComplete="off"
          onChange={handleValue}
        />
        <br/>
        {username}
    </div>
  )
}
