import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry, something sent wrong')
            }
            const data = await response.json()
            setUsers(data)
            setIsLoading(false)
        }
        catch(error){
            setError(error.message)
            setIsLoading(false)
        }
    }

    const btnDel = (id) => {
        const finalData = users.filter((item) => item.id !== id)
        setUsers(finalData);
    }

    useEffect(() => {
        fetchData()
    },[])

    if(isLoading){
        return(
            <div>Loading....</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
  return (
    <div className='main_content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        {users.map((user,id) => {
            return(
                <div key={user.id}>
                    <h3>{user.title}</h3>
                    <p>{user.body}</p>
                    <button onClick={() => btnDel(user.id)}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}
