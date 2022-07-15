import React,{useState} from 'react';
import './custom.css';
import SEARCH_DATA from './data';
import Loader from './loader';

export default function CustomApp() {

  return (
    <div>
        <SearchBar/>
    </div>
  )
}


function SearchBar(){
    const [ searchText,setSearchText] = useState('');
    const [results,setResults] = useState([]);
    const [showLoader,setShowLoader] = useState(false);
    const [timerId,setTimerId] = useState();

    const getResultsFromLocalData = (query) => {
        const resultsToShow = SEARCH_DATA.filter(item => item.name.official.toLowerCase().includes(query)
        );
        setResults(resultsToShow)
        console.log(resultsToShow)
    }

    const getResultsFromApi = async(query) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${query}`)
        const data = await response.json()
        setResults(data);
        setShowLoader(false);
    }

    const handleSearch = (e) => {
        setSearchText(e.target.value)
        setResults([]);
        if(e.target.value !== ''){
            setShowLoader(true);
            if(timerId){
                clearTimeout(timerId)
            }
            setTimerId(setTimeout(() => {
                getResultsFromApi(e.target.value)
            },500));
            getResultsFromApi(e.target.value)
        }
    }
    return(
        <div className="search">
            <div className='search_title'>Searchbar</div>
            <div className='input_wrapper'>
                <input type="text" value={searchText} className="search_input" onChange={handleSearch}/>
                <div className='input_search_icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                </div>
                {results.length> 0 && (
                <div className="results_wrapper">
                    {results.map((item) => {
                        return(
                            <div className="search_result">{item.name.official}</div>
                        )
                    })}
                </div>
                )}
                {showLoader && <div className="results_wrapper"><Loader/></div>}
            </div>
        </div>
    )
}