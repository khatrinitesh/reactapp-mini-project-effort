import React,{useState,createContext,useContext} from 'react';

const ThemeContext = createContext()

export default function CustomApp() {
    const [theme,setTheme] = useState('dark')
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        <ChildComponent/>
    </ThemeContext.Provider>
  )
}

function ChildComponent(){
    return <GrandChildComponent/>
}

function GrandChildComponent(){
    const {theme,setTheme} = useContext(ThemeContext)

    const handleToggle = () => {
        setTheme('light')
    }
    return(
        <>
        <div>The theme is {theme}</div>
        <button onclick={handleToggle}>Change to light theme</button>
        </>
    )
}
