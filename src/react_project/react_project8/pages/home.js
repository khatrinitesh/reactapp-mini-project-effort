import React, { useState,useEffect } from 'react';
import Banner from '../components/banner';

export default function Home() {

    const [count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(false)
    const [isLoading,setLoading] = useState(false)
    const [err,setErr] = useState('')
    const [users,setUsers] = useState([])

    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error(`sorry something went wrong`)
            }
            const data = await response.json()
            setUsers(data)
            setLoading(false)
        }
        catch(err){
            setErr(err.message)
            setLoading(false)
        }
    }

    const btnInc = () => {
        setCount(c => c + 1)
    }
    const btnDec = () => {
        setCount(c => c - 1)
    }
    const btnReset = () => {
        setCount(0)
    }

    const btnToggle= () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        fetchData()
    },[])

    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
    if(err){
        return(
            <div>{err}</div>
        )
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Home"} bannerDesc={"Lorem Ipsum"}/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>
        <hr/>
        <button className={isActive ? 'btn btn-primary' :'btn btn-danger'} onClick={btnToggle}>{isActive ? 'nitesh' : 'sameet'}</button>
        {isActive && <Nitesh/> }
        {users.map((user,i) => {
            return(
                <div className='card' key={i}>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                </div>
            )
        })}
        
    </div>
  )
}


function Nitesh(){
    return(
        <div>nitesh khatri</div>
    )
}
function Sameet(){
    return(
        <div>sammeet khatri</div>
    )
}