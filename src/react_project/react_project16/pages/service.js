import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [users,setUsers] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [errors,setErrors] = useState('')

    const fetchData = async () => {
        setIsLoading(false)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const finalData = await response.json()
            setUsers(finalData)
            setIsLoading(false)
        }
        catch(error){
            setErrors(errors.message)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    if(isLoading){
        return <div>Loading...</div>
    }
    if(errors){
        return <div>{errors}</div>
    }

    const btnRemove = (id) => {
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData)
    }
  return (

    <div className='content'>
        <Banner bannerTitle={"Service page"} bannerDesc={"Lorem Ipsum"}/>
        {users.map((user,i) =>{
            return(
                <div key={i} className="card p-3 mb-3">
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                    <button className="btn btn-primary" onClick={() => btnRemove(user.id)}>Remove</button>
                </div>
            )
        })}
    </div>          
  )
}
