import React,{useState} from 'react';

export const UseToggle = (initialValue = false) => {
    const [state,setState] = useState(initialValue);

    const toggle = () => {
        setState((prev) => !prev)
    }
  return {state,toggle}
}
