import React from 'react';
import Banner from '../components/banner';
import ConditionalRendering from '../components/conditionalrendering';
import Wrap from '../components/wrap';
import FormField from '../components/formfield';
import CustomListener from '../components/clickawaylistener';

export default function About() {

  const cssstyle = {
    color:'red'
}
  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        {/* <ConditionalRendering/>
        <Wrap style={{backgroundColor:'yellow'}} css={{cssstyle}} name="nitesh khatri" mobile="9920767524" email="nitesh.khatri88@gmail.com"/>
        <FormField/> */}
        <CustomListener/>
    </div>
  )
}
