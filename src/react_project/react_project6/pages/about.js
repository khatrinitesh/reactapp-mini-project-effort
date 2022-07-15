import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function About() {


    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState('')

    const [count,setCount ] = useState(0)
    const [isActive,setIsActive ] = useState(false)


    const btnInc = () => {
        setCount(c => c + 1 )
    }
    const btnDesc = () => {
        setCount(c => c - 1 )
    }
    const btnReset = () => {
        setCount(0)
    }

    const btnToggle =() => {
        setIsActive(!isActive)
    }

    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            if(!response.ok){
                throw new Error(`sorry something went wrong`)
            }
            const data = await response.json()
            setUsers(data)
        }
        catch(err){
            setErr(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const btnRemove= (id) => {
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData)
    }

     
  return (
    <div className='content'>
        <Banner bannerTitle={"About"} bannerDesc={"Lorem Ipsum"}/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDesc}>-</button>
        <button onClick={btnReset}>Reset</button>
        <div>
            <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-danger'}>{isActive ? 'sameet' : 'nitesh'}</button>
            {isActive ? "nitesh" : "sameet"}
        </div>
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
