import React,{ useEffect, useState } from "react";
import axios from "axios"

const Fetcher = ({url,children}) => {
  const [users,setUsers] = useState([]);
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
    axios.get(url)
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {
      setError('sorry, something went wrong')
      setIsLoading(false)
    },[url])
  })

  return children({users,isLoading,error})
}

export default Fetcher;