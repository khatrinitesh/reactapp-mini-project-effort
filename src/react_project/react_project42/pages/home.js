import React,{useState} from 'react';
import Banner from '../components/banner';
import SearchBar from '../components/searchbar';
import PortfolioFilter from '../components/portfoliofilter'

export default function Home() {

    const [count,setCount] = useState(0);
    const [isActive,setIsActive] = useState(false);

    const btnInc = () => {
        setCount(c => c + 1)
    }
    const btnDec = () => {
        setCount(c => c - 1)
    }
    const btnReset = () => {
        setCount(0)
    }

    const btnToggle = () => {
        setIsActive(!isActive);
    }
  return (
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>
        <button onClick={btnToggle}>{isActive ? 'hide' : 'show'}</button>
        {isActive}
        <SearchBar/>
        <PortfolioFilter/>
    </div>
  )
}
