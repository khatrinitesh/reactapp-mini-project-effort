import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [errors,setErrors] = useState('')

    const fetchData= async() => {
        setLoading(false)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error(`sorry something went wrong`)
            }
            const data = await response.json()
            setUsers(data)
            setLoading(false)
        }
        catch(errors){
            setErrors(errors.message)
        }
    }

    const btnDelete = (id) => {
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData)
    }

    useEffect(() => {
        fetchData()
    },[])

    if(loading){
        return <div>loading...</div>
    }
    if(errors){
        return <div>{errors}</div>
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Service"} bannerDesc={"Fugiat labore est labore ullamco dolore sit non.Esse occaecat consectetur adipisicing excepteur commodo non voluptate veniam Lorem adipisicing anim do et eiusmod."}/>
        {users.map((item,i) => {
            return(
                <div key={i}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <button onClick={() => btnDelete(item.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
