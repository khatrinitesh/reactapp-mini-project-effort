import axios from 'axios'
import React, { useEffect,useState } from 'react'

export default function CustomApp() {
    const [users,setUsers] = useState([])

    const fetchData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            setUsers(response.data)
        })
        .catch(error => {
            console.log({ error })
          })
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
        {users.length > 0 && (
            <ul>
                {users.map((user,i) => {
                    return(
                        <li key={i}>
                            {user.name}
                            <br/> 
                            {user.email}
                        </li>
                    )
                })}
            </ul>
        )}
    </div>
  )
}
