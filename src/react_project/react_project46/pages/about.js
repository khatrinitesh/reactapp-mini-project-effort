import React,{useState} from 'react';
import Banner from '../components/banner';
import InputSearchForm from '../components/inputsearchform';
import PasswordValidation from '../components/passwordvalidation';
import TogglePwdVisible from '../components/togglepwdvisible';
import MultipleStepForm from '../components/multiplestepform';
import AutoComplete from '../components/autocomplete';
import CustomProgressBar from '../components/progressbar';
import CustomToolTip from '../components/tooltip';
import CustomPopUp from '../components/popup';


export default function About() {

  const list = [
    {id:1,name:'nitesh'},
    {id:2,name:'sameet'},
    {id:3,name:'daddy'},
    {id:4,name:'mom'},
  ]

  const [count,setCount] = useState(0);
  const [isActive,setIsActive] = useState(true);
  const [content,setContent] = useState(list)

  const btnToggle = () => {
    setIsActive(!isActive);
    setContent(!content);
  }
  

  const btnInc = () => {
    setCount(count => count + 1)
  }
  const btnDec = () => {
    setCount(count => count - 1)
  }
  const btnReset = () => {
    setCount(0)
  }
  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        <CustomPopUp/>
        <CustomToolTip/>
        <CustomProgressBar/>
        <AutoComplete/>
        <MultipleStepForm/>
        <TogglePwdVisible/>
        <PasswordValidation/>

        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>
          {isActive ? 'primary' : 'success'}
        </button>
        {isActive ? (<div>{content.map((val,index) => {
          return(
            <div key={index}>
              <h3>{index} {val.name}</h3>
            </div>
          )
        })}</div>) : (<div>2</div>)}

        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>
    </div>
  )
}
