import React,{useState,useEffect,useRef} from 'react'

export default function CustomToDo() {

    const [username, setUsername] = useState("");
    const usernameRef = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setUsername(usernameRef.current.value);
        usernameRef.current.value = '';
    }

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input type='text' ref={usernameRef} name="username" placeholder="Enter your name" autoComplete="off"/>
            <button>Submit</button>
        </form>
        <p>{username}</p>
    </div>
  )
}
