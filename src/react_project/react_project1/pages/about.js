import React,{useState} from 'react';
import Banner from '../components/banner';

export default function About() {

    const [ data,setData] = useState({data:[]});
    const [isLoading,setLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async() => {
        setLoading(true);
        try{
            const response = await fetch(`https://reqres.in/api/users`,{
                method:'GET',
                headers:{
                    Accept:'application/json',
                },
            });
            if(!response.ok){
                throw new Error(`Error! status:${response.status}`)
            }
            const result = await response.json()
            setData(result)
            console.log(`result is`,JSON.stringify(result,null,4))
        }
        catch(err){
            setErr(err.message)
        }
        finally{
            setLoading(false)
        }
    };

    console.log(data)
    

  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h2>Loading...</h2>}

      {data.data.map(person => {
        return (
          <div key={person.id}>
            <h2>{person.email}</h2>
            <h2>{person.first_name}</h2>
            <h2>{person.last_name}</h2>
            <br />
          </div>
        );
      })}
    </div>
  )
}
