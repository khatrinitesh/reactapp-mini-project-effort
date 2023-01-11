import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import axios from 'axios';

export default function Service() {

    // useState
    const [user,setUser] = useState([]); // null
    const [filteredData,setFilteredData] = useState(user);
    const [loading,setLoading] = useState(false); // boolean
    const [error,setError] = useState(''); // string
    const [fact, setFact] = useState("");
    
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = user.filter((data) => {
            return data.title.search(value) != -1;
        });
        setFilteredData(result);
        }

    // fetch data rest api
    const fetchFact = () => {
        fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((data) => setFact(data.fact))
    }
    const fetchData = () => {
        setLoading(false)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            setUser(response.data);
            setFilteredData(response.data);
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
            setError(error.message)
        })
    }

    // useffect
    useEffect(() => {
        fetchData();
        // fetchFact();
    },[])

    // delet rest api data
    const btnDel = (id) => {
        const finalData = filteredData.filter((item) => item.id !== id)
        setFilteredData(finalData)
        alert('delete this')
    }

    const getFact = () => {
        fetchFact();
    }


    // loading
    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    // error
    if(error){
        return(
            <div>{error}</div>
        )
    }
    

  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        <button onClick={getFact}>Get Cat fact</button>
        {fact}
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
            <label>Search:</label>
            <input type="text" onChange={(event) =>handleSearch(event)} />
        </div>
        {filteredData.map((val,index) => {
            return(
                <div key={index}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                    <button className="btn btn-primary" onClick={() => btnDel(val.id)}>&times;</button>
                </div>
            )
        })}
    </div>
  )
}
