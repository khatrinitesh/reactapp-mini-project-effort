import React,{useState,useContext} from 'react';
import Banner from '../components/banner';
import UserContext from '../components/customcontext';
import Home from '../pages/home';
import ColorGenerator from '../components/colorgenerator';
import ChildrenProps from '../components/childrenprops';



export default function About() {

    const [count,setCount] = useState(0);
    const [isActive,setIsActive] = useState(true);
    const isLogged = false;
    const [showPage,setShowPage] = useState(false);
    
    const preview = useContext(UserContext)
    console.log(preview)
    const [data,setData] = useState();
    

    const Heading = {
        color:'red',
        fontSize:'80px'
    }

    const arr1 = [
        {
            id:1,
            title:'nitesh khatri',
            body:'Magna tempor aliquip sint magna.',
            address:[
                {
                    hm:'101',
                    city:'noida',
                    country:'india'
                }
            ],
        },
    ]
    const arr2 = [
        {
            id:2,
            title:'sameet khatri',
            body:'lorem ipsum',
            address:[
                {
                    hm:'102',
                    city:'delhi',
                    country:'india'
                }
            ],
        },
    ]
    const arr3 = [
        {
            id:3,
            title:'arvind khatri',
            body:'Magna tempor aliquip sint asdaddsdsd.',
            address:[
                {
                    hm:'103',
                    city:'lucknow',
                    country:'india'
                }
            ],
        },
    ]

    const mergearr = [...arr1,...arr2,...arr3]

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
        setIsActive(!isActive)
    }

    const showPageEvent2  =() => {
        setShowPage(!showPage)
    }

  return (
        // <UserContext.Provider value={{data,Heading}}>
        //     <Home/>
        //     <input type="text" onChange={e => setData(e.target.value)}/>
        // </UserContext.Provider>
    <div className='content'>
        
        <Banner banerTitle="About" bannerDesc="Lorem Ipsum"/>
        <ChildrenProps/>
        <ColorGenerator/>
        {count}    
        <button className='btn btn-primary' onClick={btnInc}>+</button>
        <button className='btn btn-primary' onClick={btnDec}>-</button>
        <button className='btn btn-primary' onClick={btnReset}>Reset</button>
        <hr/>   
        <button onClick={btnToggle} className={isActive ? 'btn btn-primary' : 'btn btn-secondary'}>{isActive ? "true" : "false"}</button>
        {isActive ? 'nitesh' : 'sameet'}

        {isLogged ? <div>nitesh khatri</div> : <div>sameet khatri</div>}
        {isLogged || <div>nitesh khatri</div>}

        {mergearr.map((item,index) => {
            return(
                <div key={index}>
                    <h3>{item.title}</h3>
                    <br/>
                    <p style={{color:'red',textDecoration:'underline'}}>{item.body}</p>
                    <p>{mergearr?.address?.city}</p>
                </div>
            )
        })}

        <button className={showPage && 'btn btn-success'} onClick={showPageEvent2}>Show me</button>


    </div>
  )
}
