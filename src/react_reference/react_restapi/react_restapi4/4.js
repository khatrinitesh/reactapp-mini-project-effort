import React,{ useState,useEffect } from "react";

export default function CustomApp() {



    const [ users,setUsers] = useState([]);

    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

    
  return (
    <div>
        <button onClick={fetchData}>Click Fetch data</button>
        {users.length > 0 && (
            <ul>
                {users.map((val,i) => {
                    return(
                        <li key={i}>
                            <h3>{val.name}</h3>
                            <p>{val.email}</p>
                        </li>
                    )
                })}
            </ul>
        )}
    </div>
  )
}
