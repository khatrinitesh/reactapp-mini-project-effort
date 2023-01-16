import React,{useState,createContext} from 'react'


const UserContext = createContext();

export default function CustomApp() {

    const [user,setUser] = useState('nitesh khatri');

  return (
    <UserContext.Provider value={user}>
        <h1>{`Hello ${user}`}</h1>
        <ComponentTwo/>
    </UserContext.Provider>
  )
}

function ComponentTwo({user}){
    return(
        <>
         <h1>Componnt 2</h1>
         <ComponentThree user={user}/>
        </>
    )
}
function ComponentThree({user}){
    return(
        <>
         <h1>Componnt 3</h1>
         <ComponentFour user={user}/>
        </>
    )
}
function ComponentFour({user}){
    return(
        <>
         <h1>Componnt 4</h1>
         <ComponentFive user={user}/>
        </>
    )
}
function ComponentFive({user}){
    return(
        <>
         <h1>Componnt 5</h1>
        </>
    )
}