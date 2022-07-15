import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [users,setUsers] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState('')

    const fetchData =  async () => {
        setIsLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry, somethng went wrong')
            }
            const data =  await response.json();
            setUsers(data);
            console.log(data)
            setIsLoading(false);
        }
        catch(error) {
            setError(error.message);
            setIsLoading(false);
        }
    }

    const btnRmove =(id) => {
        const finalData = users.filter(item => item.id !== id)
        setUsers(finalData)
    }

    useEffect(() => {
        fetchData();
    },[]);

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        {users.map((user,index) => {
            return(
                <div key={index}>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                    <button onClick={() => btnRmove(user.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
