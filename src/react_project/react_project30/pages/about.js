import React,{useState} from 'react';
import Banner from '../components/banner';
import classes from './about.module.css';
import CustomToDo from '../components/todo/todo';

export default function About() {
    const [inputValue,setInputValue] = useState('')
    const [showText,setShowText] = useState(true)
    const [textColor,setTextColor] = useState("red");

    const btnChangeColor = () => {
        setTextColor(textColor === 'orange' ? 'blue' : 'black')
    }

    const handleInputChange =(e) => {
        setInputValue(e.target.value)
    }

    const btnSH = () => {
        setShowText(!showText)
    }   
  return (
    <div className='content'>
        <Banner  bannerTitle={"About"} bannerDesc={"Esse aliquip laborum nisi aute."}/>
        <CustomToDo/>
        <br/>
        <button onClick={btnChangeColor}>Change text color</button>
        <h1 style={{color:textColor}}>Heading Title</h1>
        <button onClick={btnSH} className={showText ? 'btn btn-primary' : 'btn btn-success'}>{showText ? 'hide' : 'show'}</button>
        <h1>{showText  && 'nitesh khatri 1'}</h1>
        <h2 className={classes.title}>nitesh khatri</h2>
        <br/>
        <input type="text" onChange={handleInputChange}/>
        {inputValue}
        <br/>
        <Game/>
    </div>
  )
}


function Game(){
    const age = 15;
    const isGreen = true
    const names = ['vishal','sonal','mayur','deepa','nilesh','neo','chetana','bhavini']

    const [aage,setAage]  = useState(0)

    const btnAge = () => {
        setAage(prevCount  => prevCount  + 1)
    }

    const planets = [
        {
            name:'nitesh',isGasPlanet:false
        },
        {
            name:'sameet',isGasPlanet:false
        },
        {
            name:'arvind',isGasPlanet:false
        },
        {
            name:'urvashi',isGasPlanet:false
        },
        {
            name:'mayur',isGasPlanet:false
        },
        {
            name:'sonal',isGasPlanet:false
        },
    ]


    return(
        <>
        {aage}
        <button onClick={btnAge}>Increase age</button>
        {names[5]}
         {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}
         <h2  style={{color:isGreen ? 'green' : 'red'}}>This is green color</h2>
         {isGreen && <button>This is a button</button>}
         {names.map((val,id) => {
            return(
                <div key={id}>
                    <p>{val}</p>
                </div>
            )
         })}
         {planets.map((val) => {
            return(
                <>
                {val.name} - {val.isGasPlanet}
                </>
            )
         })}
        </>
    )
}