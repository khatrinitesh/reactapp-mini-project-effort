import React from 'react'

export default function CustomApp() {

    const arr1 = [
        {
            id:1,
            title:'nitesh khatri',
            body:'Magna tempor aliquip sint magna.',
            address:[
                {
                    hm:'101',
                    city:'noida',
                    country:'india'
                }
            ],
        },
    ]
    const arr2 = [
        {
            id:2,
            title:'sameet khatri',
            body:'lorem ipsum',
            address:[
                {
                    hm:'102',
                    city:'delhi',
                    country:'india'
                }
            ],
        },
    ]
    const arr3 = [
        {
            id:3,
            title:'arvind khatri',
            body:'Magna tempor aliquip sint asdaddsdsd.',
            address:[
                {
                    hm:'103',
                    city:'lucknow',
                    country:'india'
                }
            ],
        },
    ]

    const children = [...arr1,...arr2,...arr3]
  return (
    <div>
        {children.map((user) => {
            return(
                <div key={user.id}>
                    <p>{user.id} - {user.title}</p>
                    <p>{user.body}</p>
                </div>
            )
        })}
    </div>
  )
}
