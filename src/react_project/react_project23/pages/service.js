import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import axios from 'axios';

export default function Service() {

    const [allData,setAllData] = useState([])
    const [filteredData,setFilteredData] = useState(allData);
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    const FetchData = async() => {
        setLoading(true)
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            setAllData(response.data)
            setFilteredData(response.data)
            setLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setLoading(false)
        })
    }

    const btnDel = (id) => {
        const finalData = filteredData.filter((item) => item.id !== id)
        setFilteredData(finalData)
    }

    const handleSearch = (e)=>{
        let value = e.target.value.toLowerCase();
        let result = []
        result = allData.filter((data) => {
            return data.title.search(value) != -1
        });
        setFilteredData(result)
    }

    useEffect(() => {
        FetchData()
    },[])


    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"Service"} bannerDesc={"Ipsum nostrud occaecat id aliqua qui anim cupidatat officia."}/>
        <div className='mb-2'>
            <label>Search Filter:</label>
            <input className='form-control' type="text" onChange={(e) => handleSearch(e)}/>
        </div>
        <div className='row'>
        {filteredData.map((val,ind) => {
            return(
                <div key={ind} className="col-4 mb-3">
                    <div className='card p-3 h-100 d-flex justify-content-between'>
                        <div className="section_title">
                            <h3>{val.title}</h3>
                            <p>{val.body}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => btnDel(val.id)}>Remove</button>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}
