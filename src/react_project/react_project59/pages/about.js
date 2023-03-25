
import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import axios from 'axios';

export default function About() {

  const [data, setData] = useState({ hits: [] });
  const [query] = useState('javascript');


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://hn.algolia.com/api/v1/search?query=${query}`,);
      setData(result.data);
    };

    fetchData();
  },[query]);
  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
      {data.hits.map((val) => {
        return(
          <h1>{val.title}</h1>
        )
      })}
    </div>
  )
}