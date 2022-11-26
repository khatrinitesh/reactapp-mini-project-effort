import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Example/>
    </div>
  )
}

const About = (props) => {
    return(
        <>
         <h1 {...props}>Nitesh Khatri</h1>
        </>
    )
}

const Home = () => {
    <About style={{color:'red',border:'1px solid orange',fontSize:'20px',textAlign:'center',backgroundColor:'yellow'}}/>
}

const Example = () => {
    return(
        <div>
            <Home/>
        </div>
    )
}