import React,{useContext} from 'react';
import Banner from '../components/banner';
import CustomContext from '../components/customcontext';

export default function Home() {

  const context = useContext(CustomContext)
  console.log(context);


  return (
    <div className='content'>
        <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
        <h3 style={context.Heading}>{context.data}</h3>
        <p>ASDADAD</p>
    </div>
  )
}
