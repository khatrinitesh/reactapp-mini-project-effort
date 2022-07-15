import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [users,setUsers] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [err,setErr] = useState('')

    const fetchData = async () => {
        setIsLoading(true)
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            if(!response.ok){
                throw new Error(`sorry, something went wrong`)
            }
            const data = await response.json()
            setUsers(data)
            console.log(data)
        }
        catch(error){
            setErr(`err.message`)
        }
    }

    const btnRemove = (id) => {
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData)
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        {users.map((user,i) => {
            return(
                <div className='card' key={i}>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                    <button onClick={() => btnRemove(user.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
