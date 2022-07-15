import React,{useContext,createContext} from 'react';

export const NumberContext = createContext();


export default function CustomApp() {
  return (
    <NumberContext.Provider value={42}>
        <Display/>
    </NumberContext.Provider>
  )
}

function Display(){
    const value = useContext(NumberContext)
    return(
        <NumberContext.Consumer>
            {value => <div>The answer is {value}.</div>}
        </NumberContext.Consumer>
    )
}
