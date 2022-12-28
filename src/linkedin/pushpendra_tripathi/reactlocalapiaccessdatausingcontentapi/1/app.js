import React,{useState} from 'react';

// components
import Home from './home';
import About from './about';
import SData from './sdata';
import MainContext from './maincontext';


export default function CustomApp() {

    const [isActive,setIsActive] = useState(true);

    const btnToggle = () => {
        setIsActive(!isActive)
    }
  return (
    <div>
        <MainContext.Provider value={SData}>
            {isActive ? <Home/> : <About/>}
            <button onClick={btnToggle}>{isActive ? 'about page' : 'home page'}</button>
        </MainContext.Provider>
    </div>
  )
}
