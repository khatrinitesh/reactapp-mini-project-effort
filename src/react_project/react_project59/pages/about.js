<<<<<<< HEAD
import React,{useState} from 'react';
import Banner from '../components/banner';

export default function About() {

    const edit = true;
  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        <ExampleCondition isLogged={false}/>
        <hr/>
        {edit ? (<Nitesh/>) : (<Sameet/>) }

    </div>
  )
}

function ExampleCondition(props){

    const isLogged = props.isLogged;
    if(isLogged){
        return(
                <Nitesh/>
        )
    }
    else{
        return(
                <Sameet/>
        )
    }
  }

  function Nitesh(){
    const [active,setActive] = useState(true);
    return(
        <div className={active ? 'btn btn-primary' : 'btn btn-success'}>This is Nitesh Khatri 1</div>
    )
  }
  function Sameet(){
    const [active,setActive] = useState(false);
    return(
        <div className={active ? 'btn btn-primary' : 'btn btn-success'}>This is Sameet Khatri 2</div>
    )
  }
=======
import React from 'react';
import Banner from '../components/banner';

export default function About() {
  return (
    <div className='content'>
        <Banner bannerTitle="About page" bannerDesc="Lorem Ipsum"/>
    </div>
  )
}
>>>>>>> d902be640f29ac20838702ffa91e7d6fe6587d3b
