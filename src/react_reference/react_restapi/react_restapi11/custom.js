import React,{useState,useEffect} from 'react';
import axios from 'axios';

const UseFetch = (url) => {

    const [users,setUsers] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [err,setErr] = useState('')

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
        .then(response => {
            setUsers(response.data)
            setIsLoading(false)
        })
        .catch(err => {
            setErr('sorry, something went wrong')
            setIsLoading(false)
        })
    },[url])
  return (
      {users,isLoading,err}
  )
}

export default UseFetch;
