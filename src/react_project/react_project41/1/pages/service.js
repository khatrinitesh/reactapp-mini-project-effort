import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import DataTable from '../components/datatable';


export default function Service() {
    
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');




    const handleFetch = () => {
        setIsLoading(true);
        fetch('https://reqres.in/api/users?page=0')
        .then((response) => response.json())
        .then((response ) => {
            setUsers(response.data)
            setIsLoading(false)
        })
        .catch(() => {
            setErrorMsg('unable to fetch user list')
            setIsLoading(false)
        })
    }

  return (
    <div className='content'>
    <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
  
    <hr/>
    {isLoading ? <div>Loading...</div> : null}
    {errorMsg && <div className="error">{errorMsg}</div>}
    <button onClick={handleFetch}>Fetch Users</button>
   
    {users.map((val,index) => {
        return(
            <div className='user_container' key={index}>
             <img src={val.avatar} alt=""/>
             <div className="userDetail">
                <div className="first-name">{`${val.first_name}                
                                        ${val.last_name}`}</div>
                <div className="last-name">{val.email}</div>
            </div>
            </div>
        )
    })}
    <hr/>
    <DataTable/>
    </div>
  )
}
