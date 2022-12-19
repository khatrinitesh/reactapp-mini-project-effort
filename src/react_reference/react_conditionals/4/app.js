import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <Conditional/>
    </div>
  )
}


const Conditional = () => {
    // let disabled = true;
    // let type = 'text';
    // let name = 'address';

    const user = {
        role:"student",
        name:"nitesh"
    }
    // if(user.role === 'student'){
    //     disabled = true;
    // }

    return (
        <>
        {/* <input type={type} name={name} disabled={disabled}/> */}
        <input type='text' name='address' disabled={user.role  === 'student' ? true : false}/>
        </>
    )
}