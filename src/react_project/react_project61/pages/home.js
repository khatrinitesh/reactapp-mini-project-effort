import React,{useState} from 'react';
import Banner from '../components/banner';
import styled from "styled-components";

export default function Home() {

    const [isClicked,setIsClicked] = useState(true);

    const StyledButton = styled.button`
        background-color: black;
        font-size: 32px;
        color: white;
        `;


        const BtnStyle = styled.button`
        background-color:red;
        color:white;
        font-size:20px
        `


        const BtnStyleThree = styled.button`
         background-color:${props => props.isClicked ? 'red' : 'yellow'};
         border:none;
        `

    // const [bgColor,setBgColor] = useState('red');
    const [toggle,setToggle] = useState(false);

    // function handleBgChange(){
    //     setBgColor('blue')
    // }

    // const btnclass = toggle ? 'btn btn-primary' : 'btn btn-success'
    const btnToggle =()=> {
        setToggle(!toggle)
    }

    const StyledButtonTwo = styled.button`
    min-width: 200px;
    border: none;
    font-size: 18px;
    padding: 7px 10px;
    background-color: ${props => props.bg === "black" ? "black" : "blue"};
  `

  const btnToggleThree = () => {
    setIsClicked(!isClicked)
  }


  return (
    <div className='content'>
      <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
      {/* <button onClick={handleBgChange} style={{background:bgColor}}>Click me</button>
      {bgColor} */}
      {/* <button className={btnclass} onClick={btnToggle}>
        {toggle ? 'yes' : 'no'}
      </button> */}
      <StyledButton onClick={btnToggle}>{toggle ? 'yes' : 'no'}</StyledButton>
      <BtnStyle>Click me</BtnStyle>
      <StyledButtonTwo bg="blue">Click me</StyledButtonTwo>
      <BtnStyleThree isClicked={isClicked} onClick={btnToggleThree}>Click me btn style three</BtnStyleThree>
    </div>
  )
}
