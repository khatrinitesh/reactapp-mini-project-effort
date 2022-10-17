import React from 'react';
import classes from './app.module.css';
import {createUseStyles} from 'react-jss'
import styled from 'styled-components';
import './style.scss';

export default function CustomApp() {


    const abc = false

    const CustomBtn = styled.button`
        background:orange;
        color:white;
    `

    const MyheadOne = styled.h1`
     color:red;
     font-weight:bold
    `

    const MyheadTwo = styled.h2`
     color:blue;
     font-weight:bold
    `

    const MyheadThree = styled.h3`
     color:green;
     font-weight:bold
    `

    const MyheadFour = styled.h4`
     color:purple;
     font-weight:bold
    `

    const MyheadFive = styled.h5`
     color:silver;
     font-weight:bold
    `

    const MyheadSix = styled.h6`
     color:red;
     font-weight:bold
    `

    const pStyle = {
        color:abc ? 'green' : 'red',
        backgroundColor:'gray'
    }

    const style3 = createUseStyles({
        myButton: {
            color: 'green',
            margin: {
              // jss-plugin-expand gives more readable syntax
              top: 5, // jss-plugin-default-unit makes this 5px
              right: 0,
              bottom: 0,
              left: '1rem'
            },
            '& span': {
              // jss-plugin-nested applies this to a child span
              fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
            }
          },
          myLabel: {
            fontStyle: 'italic'
          }
    })

    const myHeading = styled.h1`
        color:red;
        background-color:green;
    `

    const s = style3()

  return (
    
    <div>
        <p className={classes.heading}>Nitesh Khatri</p>
        <p style={{pStyle}}>Nisi elit sunt sint culpa amet qui laboris eiusmod fugiat ex nostrud dolore deserunt irure.</p>
        <p className={s.myButton}>
            <span className={s.myLabel}>Text</span>
        </p>
        <CustomBtn>Nitesh Khatri is styled components</CustomBtn>
        <MyheadOne>Heading title 1</MyheadOne>
        <MyheadTwo>Heading title 2</MyheadTwo>
        <MyheadThree>Heading title 3</MyheadThree>
        <MyheadFour>Heading title 4</MyheadFour>
        <MyheadFive>Heading title 5</MyheadFive>
        <MyheadSix>Heading title 5</MyheadSix>
    </div>
  )
}
