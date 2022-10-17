import React from 'react';
import User from './user';

export default function CustomApp() {
  return (
    <div>
        {/* <Hello/> */}
        {/* <Hello2 name="nitesh" age={33} gender="male"/>
        <Hello2 name="sameet" age={40} gender="male"/>
        <Hello2 name="urvashi" age={64} gender="female"/>
        <Hello2 name="arvind" age={67} gender="male"/>
        <Hello2 name="manisha" age={43} gender="female"/> */}
        {/* <Hello3/> */}
        <Welcome values="nitesh"/>
        <User gender="male"/>
        <User name="nitesh" surname="khatri" age={33} gender="male"/>
        <User name="sameet" surname="khatri" age={40} gender="male"/>
        <User name="urvashi" surname="khatri" age={64} gender="female"/>
        <User name="arvind" surname="khatri" age={67} gender="male"/>
        <User name="manisha" surname="khatri" age={43} gender="female"/>
    </div>
  )
}


const Hello = () => {
    return(
        <>
         <h1>Hello</h1>
        </>
    )
}

const Hello2 = (props) => {
    return(
        <>
         <h1>Hello2</h1>
         <p>{props.name} - {props.age}</p>
        </>
    )
}

const Hello3 = () => {
    return(
        <>
         <h1>Hello3</h1>
        </>
    )
}

const Welcome = (props) => {
    return(
        <>
         <h1>Welcome
            {props.values}

         </h1>
        </>
    )
}