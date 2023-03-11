import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem ipsum"/>
        {useData}
    </div>
  )
}


 const useData = (url) => {
  const [state, setState] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();

      setState(data);
    };

    dataFetch();
  }, [url]);

  return { data: state };
};