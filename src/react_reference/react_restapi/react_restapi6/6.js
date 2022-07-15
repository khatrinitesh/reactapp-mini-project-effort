import React, { useState } from "react";

export default function CustomApp() {

    const [users,setUsers] = useState([])

    const fetchData = (e) => {
        const query = e.target.value
        fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

    const btnRemove= (id) => {
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData)
    }
  return (
    <div>
        <input onChange={fetchData} placeholder="Search User"/>
        {users.length > 0 && (
            <ul>
                {users.map((val,i) => {
                    return(
                        <li key={i}>
                            {val.name}
                            <button onClick={() => btnRemove(val.id)}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        )}
    </div>
  )
}
