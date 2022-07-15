import React, { useEffect, useState } from "react"

export default function CustomApp() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState("")

    const fetchData = async () => {
        setError('')
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const result = await response.json()
            setUsers(result)
        }
        catch(error){
            setError(`${error.message}`)
        }
    }
    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
        {error && <div>{error}</div>}
        {users.length > 0 && (
            <ul>
                {users.map(user => {
                    return(
                        <li key={user.id}>
                            {user.name}
                            <br/>
                            {user.email}
                            <hr/>
                        </li>
                    )
                })}
            </ul>
        )}
    </div>
  )
}
