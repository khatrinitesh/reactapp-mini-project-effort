import React, { useState } from 'react'

export default function CustomApp() {
    

    const tmpFruits = [
        {
            id:1,
            name:'Apple',
            color:'Red',
        },
        {
            id:2,
            name:'Pear',
            color:'Green',
        },
        {
            id:3,
            name:'Mango',
            color:'Yellow',
        },
    ]
    const [fruits,setFruits]  = useState(tmpFruits)
    

    const insertAtTop = () => {
        const simpleobj = {
                id:4,
                name:'Guava',
                color:'Green'
            }
        setFruits([simpleobj,...fruits])
    }
  return (
    <div>
        {fruits.map((fruit,index) => {
            return(
                <h1 key={index}>
                    {index} - {fruit.id} - {fruit.name}
                </h1>
            )
        })}
        <button onClick={insertAtTop}>Add</button>
    </div>
  )
}
