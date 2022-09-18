import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import axios from 'axios';

export default function Service() {

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')


    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            if(!response.ok){
                throw new Error(`sorry something went wrong`)
            }
            const data = await response.json()
            setFilteredData(data)
            setLoading(false)
        }
        catch(error){
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        // axios('https://jsonplaceholder.typicode.com/albums/1/photos')
        // .then(response => {
        //     console.log(response.data)
        //     setAllData(response.data)
        //     setFilteredData(response.data)
        // })
        // .catch(error => {
        //     console.log('Error getting fake data: ' + error)
        // })
        fetchData()
    },[])

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = allData.filter((data) => {
            return data.title.search(value) != -1;
        })
        setFilteredData(result)
    }

    const  btnDelete =(id) => {
        const finalData = filteredData.filter((item) => item.id !== id )
        setFilteredData(finalData)
    }

    // loading
    if(loading){
        return <div>Loading...</div>
    }
    // error
    if(error){
        return <div>{error}</div>
    }

  return (
    <div className='content'>
        <Banner bannerTitle={"Service"} bannerDesc={"Quis dolor anim consectetur cupidatat voluptate eiusmod nostrud commodo minim anim."}/>
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
            <label>Search:</label>
            <input type="text" onChange={(event) =>handleSearch(event)} />
            <div className='row'>
                {filteredData.map((value,index) => {
                    return(
                        <div className="col-3 mb-3">
                            <div className="d-flex  justify-content-between h-100 card p-2 m-3" key={value.id}>
                                <h3 className='mb-3'>{value.title}</h3>
                                <button className="btn btn-primary" onClick={() => btnDelete(value.id)}>&times;</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
