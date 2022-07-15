import React,{createContext,useContext, useState} from 'react';

const CountContext = createContext({children});

export default function CustomApp() {
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1)
    }
    
  return (
    <div>
        <CountContext.Provider value={{count,increment}}>
            {children}
        </CountContext.Provider>
    </div>
  )
}



