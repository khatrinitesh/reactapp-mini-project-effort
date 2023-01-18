import React,{useState, useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [user,setUser] = useState([]);


    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry, something went wrong')
            }
            const finalData = await response.json()
            setUser(finalData)
            setLoading(false)
        }
        catch(e) {
            setError(e.message)
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
    },[])

    const btnDel = (id) => {
        const finalData = user.filter((val) => val.id !== id)
        setUser(finalData)
    }


    if(loading){
        return( 
            <div>Loading...</div>
        )
    }
    if(error){
        return( 
            <div>{error.message}.</div>
        )
    }
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        {user.map((val,index) => {
            return(
                <div key={index}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                    <button onClick={() => btnDel(val.id)}>&times;</button>
                </div>
            )
        })}
    </div>
  )
}
