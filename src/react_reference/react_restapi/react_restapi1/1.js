import React,{useState} from 'react';
import axios from 'axios';

export default function CustomApp() {

    const [data,setData] = useState({data:[]})
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState('')

    const handleClick = async () => {
        setLoading(false)
        try{
            const {data} = await axios.get(`https://reqres.in/api/users`,{
                method:'GET',
                headers:{
                    Accept:'application/json',
                },
            });
            console.log('data is:',JSON.stringify(data,null,4))
            setData(data)
        }
        catch(err){
            setErr(err.message);
        }
        finally{
            setLoading(false);
        }
    };
    console.log(data);
  return (
    <div>


        {err && <div>{err}</div>}

        <button onClick={handleClick}>Fetch data</button>

        {loading && <div>Loading...</div>}
        {data.data.map(person => {
            return(
                <div key={person.id}>
                    <h2>{person.email}</h2>
                    <h2>{person.first_name}</h2>
                    <h2>{person.last_name}</h2>
                    <br />
                </div>
            )
        })}
    </div>
  )
}
