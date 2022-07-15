import React, { useEffect, useState } from "react";


export default function CustomApp() {

    const [users,setUsers] = useState([])

    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

    const btnRemove= (id) =>{ 
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData)
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
        {users.map((val,i) => {
            return(
                <div key={i}>
                    <h3>{val.name}</h3>
                    <h3>{val.email}</h3>
                    <hr/>
                    <button onClick={() => btnRemove(val.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
