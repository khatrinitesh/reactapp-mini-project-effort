import React,{useState,createContext,useContext} from 'react';

export const ThemeContext = createContext();

export default function CustomApp() {
    console.log("Render App")
    const [theme,setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor:theme}}>
        Counter 
        <CounterHooks initialCount={0}/>
        <button onClick={() => setTheme(prevTheme => {
            return prevTheme === 'red' ? 'blue' : 'red'
        })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

function CounterHooks({initialCount}){
    console.log('Render Counter Hooks')
    const [count,setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return(
        <>
         <button style={style} onClick={() => setCount(prevcount => prevcount + 1 )}>+</button>
         <span>{count}</span>
         <button style={style} onClick={() => setCount(prevcount => prevcount - 1 )}>-</button>
        </>
    )
}
