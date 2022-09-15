import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function () {
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    const [loading,setLoading] = useState(false)
    const [errors,setErrors] = useState('')

    // HANDLE SEARCH
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
            console.log(value);
            result = allData.filter((data) => {
            return data.title.search(value) != -1;
        });
        setFilteredData(result);
    }

    const fetchData = async()=> {
        setLoading(true)
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            setAllData(response.data);
            setFilteredData(response.data);
            setLoading(false)
        })
        .catch(errors => {
            setErrors(errors.message)
            console.log(`${errors.message}`);
            setLoading(false)
        })  
    }

    const btnRemove = (id) => {
        const finalData = filteredData.filter((item) => item.id !==id)
        setFilteredData(finalData)
    }

    useEffect(() => {
        fetchData()
    },[])


    if(loading){
        return <div>Loading...</div>
    }
    if(errors){
        return <div>{errors}</div>
    }
  return (
    <div className='content'>
    <Banner bannerTitle={"Service"} bannerDesc={"Ad aute aliqua aliqua velit dolor."}/>
    <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
    </div>
    <div className='row'>
        {filteredData.map((user,index) => {
            return(
                <div className='col-3 mb-3'>
                    <div key={index} className="card p-3 h-100 d-flex flex-column">
                        <div className='head_block'>
                            <h3 className='mb-3'>{user.title}</h3>
                            <p>{user.body}</p>
                        </div>
                        <button onClick={() => btnRemove(user.id)} className='btn btn-primary'>Remove</button>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}
