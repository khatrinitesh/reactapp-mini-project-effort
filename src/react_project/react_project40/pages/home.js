import React,{useState} from 'react';
import Banner from '../components/banner';

export default function Home() {

    const [count,setCount] = useState(0);

    const btnInc = () => {
        setCount(c => c + 1)
    }
    const btnDec = () => {
      setCount(c => c - 1)
  }


  return (
    <div className='content'>
      <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
    </div>
  )
}
