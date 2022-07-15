import React, { useEffect, useState } from "react"

export default function CustomApp() {

    const [users,setUsers] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchData = () => {
        setError("")
        setIsLoading(true)
        fetch("https://jsonplaceholder.typicode.com/404")
          .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error("Sorry something went wrong")
            }
          })
          .then(data => {
            setUsers(data)
            setIsLoading(false)
            console.log(setUsers(data))
          })
          .catch(error => {
            setError(error.message)
            setIsLoading(false)
          })
      }
    
      useEffect(() => {
        fetchData()
      }, [])
    

    const btnRemove= (id) => {
        const finalData = users.filter((item)  => item.id !== id)
        setUsers(finalData)
    }
   
  return (
    <div>
        {/* LOADING */}
        {isLoading && <div>Loading...</div>}
        
        {/* ERROR */}
        {error && <div>{error}</div>}


        {/* DATA JSON API OBJECT ARRAY */}
        {users.map((val) => {
            return(
                <li>
                    <h3>{val.name}</h3>
                    <p>{val.email}</p>
                    <button onClick={() => btnRemove(val.id)}>Remove</button>
                </li>
            )
        })}
    </div>
  )
}
