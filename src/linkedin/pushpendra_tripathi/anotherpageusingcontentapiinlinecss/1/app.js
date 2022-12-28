import React,{useContext,useState} from 'react';
import MainContext from './maincontext';
import Home from './home';

export default function CustomApp() {

    const [data,setData] = useState("")
    
    const x = useContext(MainContext);
    console.log(x);

    const Heading = {
        color:'red',
        fontSize:'80px'
    }
  return (
    <div>
        <MainContext.Provider value={{data,Heading}}>
            <Home/>
            <input type="text" onChange={e => setData(e.target.value)}/>
        </MainContext.Provider>
    </div>
  )
}
