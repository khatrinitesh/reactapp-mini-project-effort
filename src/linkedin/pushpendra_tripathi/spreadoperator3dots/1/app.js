import React from 'react';

export default function CustomApp() {

    const Sdata = [
        {id:1,name:'nitesh',age:33},
        {id:1,name:'sameet',age:40},
        {id:1,name:'urvashi',age:64},
        {id:1,name:'arvind',age:67},
    ]

    const Allowme = [
        {id:1,name:'one lorem ipsum is simply'},
        {id:2,name:'two lorem ipsum is simply'},
        {id:3,name:'three lorem ipsum is simply'},
    ]

    let details = [...Sdata,...Allowme]
    console.log(details)
  return (
    <div>
        {details.map((user) => {
            return (
                <>
                 <h1>{user.name}</h1>
                 <p>{user.age}</p>
                </>
            )
        })}
    </div>
  )
}
