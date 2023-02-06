import React from 'react';
import Banner from '../components/banner';
import {Offers,SBDieselTwo} from '../data/data1';

export default function Home() {

  const [data,setData] = React.useState(Offers)
  const [sbdata,setSBData] = React.useState(SBDieselTwo)
  return (
    <div className='content'>
      <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
      {data.map((val) => {
        return(
          <div>
           <h2>{val.title}</h2>
          </div>
        )
      })}

      {sbdata.map((val) => {
        return(
          <div>
           <h2>{val.title}</h2>
          </div>
        )
      })}
    </div>
  )
}
