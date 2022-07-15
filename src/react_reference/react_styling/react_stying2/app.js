import React from 'react';
import styled from 'styled-components';

export default function CustomApp() {
  return (
    <div>
        <CustomStylingOne/>
    </div>
  )
}


function CustomStylingOne(){

    let myFavColor = 'blue'

    const Paragraph = styled.p`
        color:red;
        font-size:20px;
        line-height:20px;
        text-align:center;
        transition:all .3s linear;
        &:hover,&.active {
            color:orange;
          }
          
    `

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    }
    `;

    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;

    const Button = styled.button`
     background-color:${({bg}) => bg};
     color:${({txtcolor}) => txtcolor};
    `
    return(
        <>
        <Wrapper>
         <Title>Heading title</Title>
         <Paragraph>Lorem Ipsum</Paragraph>
         <span className={myFavColor}>Span my favorite color</span>
         <Button txtcolor="white" bg="green">Click Button</Button>
         </Wrapper>
        </>
    )
}