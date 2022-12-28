import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {toggleDarkMode} from './darkModeSlice';

export default function CustomIndex() {

    const {mode} = useSelector((state) => state.mode.darkMode);
    console.log(mode)

    const dispatch = useDispatch();    
  return (
    <div>
        <button onClick={() => dispatch(toggleDarkMode())}>Dark mode</button>
    </div>
  )
}
