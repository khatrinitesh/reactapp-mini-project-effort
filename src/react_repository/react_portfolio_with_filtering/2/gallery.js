import React,{useState} from 'react';
import Data from './data';
import Tabs from './tabs';
import Items from './items';

export default function Gallery() {
    const [data,setData] = useState(Data);

    const categoryData = Data.map((val) => {
        return val.category;
    })

    const tabsData = ['all',...new Set(categoryData)];

    const filterCategory = (category) => {
        if(category == 'all'){
            setData(data);
            return;
        }
        const filteredData = Data.filter((val) => {
            return val.category == category;
        })
        setData(filteredData)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10'>
                <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
                <Items data={data}/>
            </div>
            <div className='col-sm-1'></div>
        </div>
    </div>
  )
}
