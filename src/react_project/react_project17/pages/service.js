import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

    const [ users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    const fetchData = async () => {
        setLoading(false)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error(`sorry something went wrong`)
            }
            const finalData = await response.json()
            setUsers(finalData)
            setLoading(false)
        }
        catch(error){
            setError(error.message)
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
    if(error){
        return <div>{error}</div>
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Service page"} bannerDesc={"Est commodo veniam laborum consequat cupidatat irure magna reprehenderit aute non velit."}/>
        <div className='row'>
            
                {users.map((user,i) => {
                    return(
                        <div className='col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 mb-3'>
                            <div key={i} className="card h-100 p-3 d-flex justify-content-between">
                                <h3>{user.title}</h3>
                                <p>{user.body}</p>
                                <button className="btn btn-primary" onClick={() => btnRemove(user.id)}>Remove</button>
                            </div>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}
