import React from 'react'

export default function CustomApp() {

    const sData = [
        {
            name:'nitesh',
            age:33
        },
        {
            name:'urvashi',
            age:64
        },
        {
            name:'arvind',
            age:67
        },
    ]

    localStorage.setItem('example',JSON.stringify(sData));
    var tFullData = JSON.parse(localStorage.getItem('example'));
  return (
    <div>
        {tFullData.map((users) => {
            return(
                <>
                    {users.name} - {users.age}
                </>
            )
        })}
    </div>
  )
}
