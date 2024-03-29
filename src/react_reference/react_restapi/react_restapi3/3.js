import React, { useEffect, useState } from "react"

export default function CustomApp() {
    const [ users,setUsers] = useState([])

    const fetchData = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
        {users.length > 0 && (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        )}
    </div>
  )
}
