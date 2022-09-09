import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function About() {

    const handleClick = () => {
        window.open('http://twitter.com/saigowthamr')
    }

    const [ count,setCount] = useState(0)
    const [isActive,setIsActive] = useState(true)

    const btnInc = () => {
        setCount(prevC => prevC + 1)
    }
    const btnDec = () => {
        setCount(prevC => prevC - 1)
    }
    const btnRes = () => {
        setCount(0)
    }

    const btnToggle = () => {
        setIsActive(!isActive)
    }
  return (
    <div className='content'>
        <Banner bannerTitle={"About us page"} bannerDesc={"Nulla minim duis nisi consectetur magna pariatur"}/>
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnRes}>Reset</button>
        {count}


        <div className='child'>
            <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-success'}>Click toggle</button>
            {isActive ? <Nitesh/> : <Sameet/> }
        </div>

        <button onClick={handleClick}>Twitter</button>
        <Parent>
            <Button name='yes'/>
            <Button name='no'/>
        </Parent>
    </div>
  )
}


function Nitesh(){
    return(
        <>
        Nitesh Khatri
        </>
    )
}
function Sameet(){
    return(
        <>
        Sameet Khatri
        </>
    )
}

function Button(props){
    return <button style={{color:props.color,background:props.bgcolor}}>{props.name}</button>
}

function Parent(props){

    const updateWithProps = React.Children.map(props.children,(child,i) => {
        return React.cloneElement(child,{color:'blue',bgcolor:'orange'})
    })

    return <div>{updateWithProps}</div>
}