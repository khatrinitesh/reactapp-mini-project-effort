import React,{useReducer,useState} from 'react';

const initialState = 0;

const reducer = (state,act) => {
    switch(act){
        case "increment" : return state + 1;
        case "decrement" : return state - 1;
        case "reset" : return initialState;
        default: return state;
    }
}

export default function CustomApp() {

    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>{count}</div>
        <button onClick={() => dispatch('increment')}>increment {count}</button>
        <button onClick={() => dispatch('decrement')}>decrement {count}</button>
        <button onClick={() => dispatch('reset')}>reset {count}</button>
    </div>
  )
}
