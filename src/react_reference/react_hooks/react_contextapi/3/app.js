import React,{useState,createContext} from 'react'

export default function CustomApp() {
  return (
    <div>
        <ComponentA/>
    </div>
  )
}

const contextInitialState = {read:true,markRead:() =>{}};
const DashContext = createContext(contextInitialState)

const ComponentA = () => {
    
    const [isSomeValueRead, setValueRead] = useState(true);
    return(
        <DashContext.Provider value={{ read: isSomeValueRead, markRead: setValueRead }}>
        <ComponentB />
        <ComponentC />
    </DashContext.Provider>
    )
}

const ComponentB = () => {
    return(
        <DashContext.Consumer>
            {
                ({markRead}) =>(
                    <button onClick={() => markRead(true)}>Click to mark as read</button>
                )
            }
        </DashContext.Consumer>
    )
}

const ComponentC = () => {
    return(
        <DashContext.Consumer>
        {
            ({ read }) => (
                <div>Is value read: {read}</div>
            )
        }
    </DashContext.Consumer>
    )
}