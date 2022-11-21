import React,{useEffect, useState} from 'react';
import Country from './country';

const Countries = () => {

    const [countries,setCountries] = useState([]);
    const [errorMsg,setErrorMsg] = useState('');
    const [loading,setLoading] = useState('');

    const fetchData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all') 
        if(!response.ok){
            throw new Error('something went wrong')
        }
        else{
            return response.json();
        }
    }

    useEffect(() => {
        fetchData().then((response) => {
            setLoading(false);
            setCountries(response);
        })
        .catch((e) => {
            setLoading(false);
            console.log(e.message)
        })
    },[])

    if(errorMsg){
        return(
            <>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>{errorMsg}</p>
            </>
        )
    }
  return (
    <div className='countries'>
        <h1>Fetching data using Async Await in React JS</h1>
        <div className='countries_grid'>
            {loading ? (<p style={{ textAlign: "center", fontWeight: "bold" }}>
            Fetching Data...
          </p>) : (
            countries.map((obj) => {
                return(
                    <Country key={obj.name.common} name={obj.name.common} population={obj.population} capital={obj.capital} flagImg={obj.flags.png} map={obj.maps.googleMaps}></Country>
                )
            })
          )}
        </div>
    </div>
  )
}

export default Countries;