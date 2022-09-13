import React,{useEffect,useState,useParams} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [users,setUsers] = useState([])
    const [errors,setErrors] = useState('')
    const [loading,setLoading] = useState(false)

    const fetchData = async()=> {
        setLoading(false)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
            if(!response.ok){
                throw new Error(`sorry something went wrong`)
            }
            const data = await response.json()
            setUsers(data)
            setLoading(false)
        }
        catch(errors){
            setErrors(errors.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const btnRemove = (id) => {
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData)
    }


    if(loading){
        return <div>Loading...</div>
    }
    if(errors){
        return <div>{errors}</div>
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Service page"} bannerDesc={"Sunt fugiat occaecat dolor minim irure aliquip adipisicing occaecat eiusmod aliqua nulla eiusmod."}/>
        {users.map((user,id) => {
            return(
                <div className="card p-4 mb-3" key={id}>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                    <button className="btn btn-primary" onClick={() => btnRemove(user.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
