import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function About() {

    const [count,setCount] = useState(0);
    const {active} = true;

    useEffect(() => {
        setInterval(() => {
            setCount( count + 1)
        },1500)
    },[])

    useEffect(() => {
        setInterval(() => {
            console.log(count)
        },1500)
    })
  return (
    <div className='content'>
        <Banner bannerTitle={"About"} bannerDesc={"Lorem Ipsum"}/>
        <div className={`heading ${active ? "active" : "deactive"}`}>React JS</div>
    </div>
  )
}
