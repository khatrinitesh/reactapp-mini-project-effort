import React,{useState,useEffect} from 'react';
import Child from './child';

export default function CustomApp() {


    const [count,setCount] = useState(0)
    const [todos,setTodos] = useState(['Item1'])

    useEffect(() => {
        console.log('parent component re-rendered');
    });

    const addTodo = (item) => {
        setTodos([...todos,item])
    }    
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={() =>setCount(count + 1)}>Increase count value</button>
        <hr/>
        <Child todos={todos} addTodo={addTodo}/>
    </div>
  )
}
