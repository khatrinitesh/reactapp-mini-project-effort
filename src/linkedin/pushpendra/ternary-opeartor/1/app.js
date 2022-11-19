import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
        <DataMap/>
        <hr/>
        <DataHide/>
    </div>
  )
}

const DataMap = () => {
    const isLoggedIn = false;

    const profiles = [
        {name:"nitesh",skills:'Full stack developer'},
        {name:"sameet",skills:'Front end developer'},
    ]

    const profilesTwo = [
        {
            name:'urvashi',age:64
        },
        {
            name:'arvind',age:67
        },
    ]

    console.log(profiles)
    return(
        <>
         {isLoggedIn ? 'Back' : <>{profiles.map((data) => {
            return(
                <>{data.name}</>
            )
         })}</>}
         {isLoggedIn ? 'Back' : <>{profilesTwo.map((data2) => {
            return(
            <>{data2.name} - {data2.age}</>
         )})}</>}
        </>
    )
}



const DataHide = () => {
    const [hide,setHide] = useState(true)

    const handleClick = () => {
        setHide(!hide)
    }

    return(
        <>
         {hide ? <h1>Hello - Nitesh</h1> : <h1>Hello - Sameet</h1>}
         <button onClick={handleClick}>HandleClick</button>
        </>
    )
}