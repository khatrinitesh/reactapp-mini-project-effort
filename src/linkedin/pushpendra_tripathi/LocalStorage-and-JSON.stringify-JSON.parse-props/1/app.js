import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Home data={data}/>
        <About data={data}/>
    </div>
  )
}


const Home =(props) =>
{
    return(
        <> 
            <h1>Home</h1> 
            <h3>Name</h3> 
            {props.data.map((obj) => {
                return(
                    <div>
                        {obj.name}
                    </div>
                )
            })}
        </>
    )
}
  
const About =(props) =>{
    return(
        <>
        <h1>About US</h1>
        <h3>Skills</h3> 
        { props.data.map((usr)=>{ return( <> {usr.skills} 
        </> )})} 
        </>
    ) 
}

const profiles = [
    {name:'Nitesh',skills:'Full Stack'},
    {name:'Gokul',skills:'Web Developer'},
]

localStorage.setItem("Profiles",JSON.stringify(profiles))
var data = JSON.parse(localStorage.getItem("Profiles"))
console.log(data);
