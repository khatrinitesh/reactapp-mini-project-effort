import React,{useState,useContext,useEffect} from 'react';
import {UseToggle} from './useToggle';
import {ToggleHand} from './togglehand';

export default function CustomApp() {
    const {state:isVisible,toggle} = UseToggle();
    const {state2,toggle2} = ToggleHand();
  return (
    <>
     <button onClick={toggle}>{isVisible ? 'hide' : 'show'}</button>
     {isVisible && <h1>Hidden text</h1>}

     <hr/>

     <button onClick={toggle2}>{state2 ? 'hide' : 'show'}</button>
     {state2 && <h1>Hidden text</h1>}
    </>
  )
}

