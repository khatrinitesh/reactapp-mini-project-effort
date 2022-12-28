import React from 'react';
import styles from './home.module.css';
import styled from 'styled-components';

const objStyle = {
    backgroundColor:'red',
}

const HStyle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

export default function Home() {
  return (
    <div style={objStyle}>
        <h1 className={styles.headingtitle}>Home Page</h1>
        <HStyle>Nitesh Khatri</HStyle>
    </div>
  )
}


