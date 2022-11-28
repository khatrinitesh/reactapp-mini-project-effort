import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Home/>
        <About/>
    </div>
  )
}

const PageHeading = (props) => {
    console.log(props.name)

    return(
        <>
         <h2 style={{color:'red',fontSize:'45px',fontFamily:'arial'}}>{props.name}</h2>
         <p style={{color:'blue',lineHeight:'20px'}}>{props.desc}</p>
        </>
    )
}


const Home = () => {
    return(
        <PageHeading name="Nitesh Khatri" desc="Lorem Ipsum 1"/>
    )
}

const About = () => {
    return(
        <PageHeading name="Sameet Khatri" desc="Lorem Ipsum 2"/>
    )
}



