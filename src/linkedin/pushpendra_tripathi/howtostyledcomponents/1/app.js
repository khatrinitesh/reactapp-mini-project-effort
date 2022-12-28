import React from 'react';
import styled from 'styled-components';

export default function CustomApp() {

    const Title1 = styled.h1`
     font-size:24px;
     font-weight:300;
     background-color:teal;
     &:hover{background-color:yellow};
     color:yellow;
     &:hover{
        color:blue;
     }
    `

    const Title2 = styled.h2`
        font-size:24px;
        font-weight:300;
        &:hover{background-color:cyan};
        color:blue;
        &:hover{
            color:yellow;
        }
    `
  return (
    <div>
        <Title1>Nitesh</Title1>
        <Title2>Sameet</Title2>
    </div>
  )
}
