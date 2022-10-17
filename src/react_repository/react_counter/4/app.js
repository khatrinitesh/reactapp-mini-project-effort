import React,{useEffect, useState,useMemo} from 'react'

export default function CustomApp() {

    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [darkMode,setDarkMode] = useState(false)

    const person = useMemo(() => {
        return {age,name}
    },[age,name])

    useEffect(() => {
        console.log(person)
    },[person])
  return (
    <div>
        <div style={{background:darkMode ? '#333' : '#fff'}}>
            Age: {" "}
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
            <br/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            DarkMode: {" "} 
            <input type="checkbox" value={darkMode} onChange={(e) => setDarkMode(e.target.checked)}/>
        </div>
    </div>
  )
}
